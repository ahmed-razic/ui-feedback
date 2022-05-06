import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { FeedbackData } from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const handleDelete = function (id) {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleRatingClick = function (id) {
    console.log(id);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          deleteItem={handleDelete}
          ratingClick={handleRatingClick}
        />
      </div>
    </>
  );
}
export default App;
