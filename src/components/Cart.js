import { useState } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const { hide, cart, changeQuantity, emptyCart } = props;
    const [ bought, setBought ] = useState(false);
    let classes = 'cart hide';
    if (hide === false) classes = 'cart';
    let total = 0;
    if (cart.length > 0 ) {
        total = 0;
        cart.forEach((item) => {
            total += +item.card_prices[0].ebay_price * item.quantity;
        })
    }
    return (
        <div className={classes}>
            {(total > 0) ? 
                cart.map(item => {
                    return(<CartItem key={item.id + 'cart'} card={item} changeQuantity={changeQuantity}/>)
                }) 
                :
                <div>
                    <p>{(bought === true) ? 'Arigatou' : ''}</p>
                    <p>Your cart is empty</p>
                </div>
            }
            <p>{'Total: ' + total.toFixed(2) + '$'}</p>
            <button onClick={() => {emptyCart(); setBought(true)}} disabled={(total === 0) ? true : false}>Checkout</button>
        </div>
    );
};

export default Cart;