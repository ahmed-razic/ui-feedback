import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './Card';

function FeedbackItem({ item, deleteItem, ratingClick }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('Example of feedback item text.');

  return (
    <Card>
      <div
        className='num-display'
        onClick={function () {
          ratingClick(item.rating);
        }}
      >
        {item.rating}
      </div>
      <button className='close' onClick={() => deleteItem(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default FeedbackItem;
