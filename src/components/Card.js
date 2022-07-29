
import { Link } from "react-router-dom";

const Card = (props) => {
    const { item } = props;
    const bigImg = item.card_images[0].image_url;
    const price = item.card_prices[0].ebay_price;
    return (
        <Link to={`/shopping-cart/shop/${item.id}`}>
            <button className="card">
                <img src={bigImg} alt={item.name}></img>
                <p>{item.name}</p>
                <p>{price + '$'}</p>
            </button>
        </Link>
    );
};

export default Card;