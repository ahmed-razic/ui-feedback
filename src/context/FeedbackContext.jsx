import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackData } from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = function ({ children }) {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const handleDelete = function (id) {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleAdd = function (newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleEdit = function (item) {
    setFeedbackEdit({ item: item, edit: true });
  };

  const handleUpdate = function (id, updatedItem) {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit: feedbackEdit,
        deleteItem: handleDelete,
        addItem: handleAdd,
        editItem: handleEdit,
        handleUpdate: handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
