import { useEffect, useState } from "react";
import Card from "./Card";

const Shop = () => {
  
  const [ index, setIndex ] = useState(0);
  const [ current, setCurrent ] = useState([]);
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const data = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');

    const items = await data.json();

    setCards(items.data);

  }

  const fillCurrent = () => {
    let aux = [];
    if (cards.length > 10) {
      for(let i = index ; i < index + 10 ; i++) {
        aux[i] = cards[i];
      }
    setCurrent(aux);
    }
  }
  
  useEffect(() => {
    fillCurrent();
  }, [cards] );
  
  if (current.length !== 0) {
    return (
      <div>
        {current.map((item) => {
          return<Card item={item}/>
        })}
      </div>
    );
  }

  else {
    return(
      <p>Wait</p>
    )
  }
  
};

export default Shop;