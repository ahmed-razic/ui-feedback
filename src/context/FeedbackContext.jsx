import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackData } from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = function ({ children }) {
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
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteItem: handleDelete,
        addItem: handleAdd,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
