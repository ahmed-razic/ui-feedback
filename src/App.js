import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { FeedbackData } from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

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
      <Header />
      <div className='container'>
        <FeedbackForm addItem={handleAdd} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteItem={handleDelete} />
      </div>
    </>
  );
}
export default App;
