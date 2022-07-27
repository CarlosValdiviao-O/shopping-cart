

const CartItem = (props) => {
    const { card, changeQuantity } = props;
    return (
        <div>
            <div className="left">
                <img src={card.card_images[0].image_url_small} alt={card.name}></img>
            </div>
            <div className="right">
                <p>{card.name}</p>
                <p>{(card.card_prices[0].ebay_price * card.quantity).toFixed(2) + '$'}</p>
                <button onClick={() => changeQuantity(card, -1)}>-</button>
                <p>{card.quantity}</p>
                <button onClick={() => changeQuantity(card, 1)}>+</button>
            </div>
        </div>
    );
};

export default CartItem;