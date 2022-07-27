import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Info = (props) => {

    const { addItem } = props;
    const { id } = useParams();

    const [ card, setCard ] = useState({});

    useEffect(() => {
        fetchCard();
    }, [id]);
    
    const fetchCard = async () => {
        const data = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
        const item = await data.json();
        setCard(item.data[0]);
    };  

    if (card.name)
    return (
        <div className="info">
            <div className="left">
                <img src={card.card_images[0].image_url} alt={card.name}></img>
            </div>
            <div className="right">
                <h1>{card.name}</h1>
                <p>{card.type}</p>
                <p>{card.desc}</p>
                <p>{card.card_prices[0].ebay_price + '$'}</p>
                <button onClick={() => addItem(card, 1)}>click</button>
            </div>
        </div>
    );
    else
    return (
        <div>
            <p>Wait</p>
        </div>
    )
};

export default Info;