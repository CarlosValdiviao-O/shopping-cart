import React, { useState, useEffect } from "react";

const Card = (props) => {
    const { item } = props;
    const bigImg = item.card_images[0].image_url;
    const price = item.card_prices[0].ebay_price;
    return (
        <button className="card">
            <img src={bigImg}></img>
            <p>{item.name}</p>
            <p>{price + '$'}</p>
        </button>
    );
};

export default Card;