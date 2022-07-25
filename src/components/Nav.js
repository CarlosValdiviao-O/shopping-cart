import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
        <Link to={'/'}>
          <h1>Secret Shop</h1>
        </Link>
        <ul>
            <Link to={'/shop'}>
              <li>Shop</li>
            </Link>
            <li>Cart</li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;
