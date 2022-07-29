import { Link } from 'react-router-dom';
import Icon from './cart.svg';

const Nav = (props) => {

  const { onClick, cart } = props;

  return (
    <nav>
      <Link to={'/shopping-cart'}>
        <h1>Shopping Card</h1>
      </Link>
      <ul>
          <Link to={'/shopping-cart/shop'}>
            <li>Shop</li>
          </Link>
          <li>
            <button onClick={onClick}>
              <img src={Icon} alt='cart-icon'></img>
              {(cart.length > 0) ? <p id='cart-quantity'>{cart.length}</p> : '' }
            </button>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
