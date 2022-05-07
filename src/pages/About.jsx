import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Card from '../components/Card';

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this App</h1>
        <p>This is React App to leave feedback about product</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>
            <FaHome size={30} />
          </Link>
        </p>
      </div>
    </Card>
  );
}
export default About;
