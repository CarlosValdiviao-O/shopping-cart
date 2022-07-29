import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

const Info = (props) => {

    const { addItem, toggleCart } = props;
    const { id } = useParams();

    const [ card, setCard ] = useState({});
    const [ quantity, setQuantity ] = useState(1);

    const inputRef = useRef({});

    useEffect(() => {
        if (inputRef.current.value) inputRef.current.value = quantity;
        if (quantity > 50) setQuantity(50);
    }, [quantity])

    useEffect(() => {
        fetchCard();
        setQuantity(1);
    }, [id]);
    
    const fetchCard = async () => {
        const data = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
        const item = await data.json();
        setCard(item.data[0]);
    };  

    const handleChange = (val) => {
        if (val >= 50) val = 50;
        setQuantity(val);
    }

    if (card.name)
    return (
        <div id="info">
            <Link to={'/shop'}>
                <div onClick={(() => setCard({}))} className="outside"></div>
            </Link>
            <div className="content">
                <div className="left">
                    <img src={card.card_images[0].image_url} alt={card.name}></img>
                </div>
                <div className="right">
                    <h1>{card.name}</h1>
                    <p>{card.type}</p>
                    <p>{card.desc}</p>
                    <p>{card.card_prices[0].ebay_price + '$'}</p>
                    <div className="buttons">
                        <button onClick={() => setQuantity((quantity) => quantity - 1)} disabled={(quantity > 1) ? false : true}>-</button>
                        <input type='number' onChange={(e) => handleChange(e.target.value)} 
                            defaultValue={1} maxLength='2' ref={inputRef}></input>
                        <button onClick={() => setQuantity((quantity) => quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => {addItem(card, quantity); setQuantity(1); toggleCart()}}>Add to Cart</button>
                </div>
                <Link to={'/shop'} style={{height: 'max-content'}}>
                    <button onClick={(() => setCard({}))} id='close-info'>X</button>
                </Link>
            </div>
        </div>
    );
    else
    return (
        <div id="info">
            <div className="left">
                <p>wait</p>
            </div>
        </div>
    )
};

export default Info;