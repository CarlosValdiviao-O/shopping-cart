import { Link } from 'react-router-dom';
import Image from "./solomon.png"

const Home = () => {
  return (
    <div id="home">
      <div className="left">
        <img src={Image} alt='solomon-muto'></img>
      </div>
      <div className="right">
        <h1>Welcome to my Shop!</h1>
        <h3>Come on in!</h3>
        <Link to={'/shop'}>
          <button>Go to shop</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
