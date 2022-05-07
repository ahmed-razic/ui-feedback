import { useContext } from 'react';
import { useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const { addItem } = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = function (e) {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length < 10 && text !== '') {
      setBtnDisabled(true);
      setMessage('Enter text longer than 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      addItem(newFeedback);
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={(selectedRating) => setRating(selectedRating)} />
        <div className='input-group'>
          <input
            type='text'
            id='input-text'
            onChange={handleTextChange}
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
