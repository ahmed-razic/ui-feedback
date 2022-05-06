import { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, deleteItem, ratingClick }) {
  return feedback.map((item) => (
    <FeedbackItem
      key={item.id}
      item={item}
      deleteItem={deleteItem}
      ratingClick={ratingClick}
    />
  ));
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  deleteItem: PropTypes.func.isRequired,
};
export default FeedbackList;
