import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackData } from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = function (id) {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleAdd = function (newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </>
  );
}
export default App;
