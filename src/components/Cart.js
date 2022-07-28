import { useState } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const { hide, cart, changeQuantity, emptyCart, toggleCart, handleChange } = props;
    const [ bought, setBought ] = useState(false);
    let classes = '';
    if (hide === false) classes = 'show'; 
    
    let total = 0;
    if (cart.length > 0 ) {
        total = 0;
        cart.forEach((item) => {
            total += +item.card_prices[0].ebay_price * item.quantity;
        })
    }
    return (
        <div className={classes} id='back'>
            <div onClick={toggleCart} id="shade"></div>
            <div onClick={() => {}} className={classes} id='cart'>
            {(total > 0) ? 
                <div className="cart-items">
                    {cart.map(item => {
                        return(<CartItem key={item.id + 'cart'} card={item} 
                                changeQuantity={changeQuantity} handleChange={handleChange}/>)
                    }) }
                </div>
                :
                <div>
                    <p>{(bought === true) ? 'Thank you for buying from us!' : ''}</p>
                    <p>Your cart is empty</p>
                </div>
            }
            <p>{'Total: ' + total.toFixed(2) + '$'}</p>
            <button onClick={() => {emptyCart(); setBought(true)}} disabled={(total === 0) ? true : false}>Checkout</button>
            <button onClick={toggleCart} id='close-cart'>x</button>
            </div>
        </div>
    );
};

export default Cart;