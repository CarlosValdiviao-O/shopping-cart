import { Link } from 'react-router-dom';
import Icon from './cart.svg';

const Nav = (props) => {

  const { onClick } = props;

  return (
    <nav>
      <Link to={'/'}>
        <h1>Shopping Card</h1>
      </Link>
      <ul>
          <Link to={'/shop'}>
            <li>Shop</li>
          </Link>
          <li>
            <button onClick={onClick}>
              <img src={Icon} alt='cart-icon'></img>
            </button>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
