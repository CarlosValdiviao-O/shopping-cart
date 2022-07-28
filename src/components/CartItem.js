import { useEffect, useRef, useState } from "react";


const CartItem = (props) => {
    const { card, changeQuantity, handleChange } = props;
    useEffect(() => {
        inputRef.current.value = card.quantity;
    }, )
    const inputRef = useRef(null);
    return (
        <div className="cart-item">
            <div className="left">
                <img src={card.card_images[0].image_url_small} alt={card.name}></img>
            </div>
            <div className="right">
                <p>{card.name}</p>
                <p>{(card.card_prices[0].ebay_price * card.quantity).toFixed(2) + '$'}</p>
                <div className="buttons">
                    <button onClick={() => changeQuantity(card, -1)}>-</button>
                    <input type='number' onChange={(e) => handleChange(card, e.target.value)} 
                        defaultValue={card.quantity} maxLength='2' ref={inputRef}></input>
                    <button onClick={() => changeQuantity(card, 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;