import { Link } from 'react-router-dom';

const Nav = (props) => {

  const { onClick } = props;

  return (
    <nav>
      <Link to={'/'}>
        <h1>Secret Shop</h1>
      </Link>
      <ul>
          <Link to={'/shop'}>
            <li>Shop</li>
          </Link>
          <li>
            <button onClick={onClick}>cart</button>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
