import { useEffect, useState } from "react";
import Card from "./Card";
import MoveBar from "./MoveBar"

const Shop = () => {
  
  const [ index, setIndex ] = useState(0);
  const [ current, setCurrent ] = useState([]);
  const [ cards, setCards ] = useState([]);
  const [ limit, setLimit ] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);
  
  useEffect(() => {
    fillCurrent();
  }, [cards, index] );

  const fetchCards = async () => {
    const data = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const items = await data.json();
    setCards(items.data);
    let aux = Math.floor(items.data.length / 12)
    if (items.data.length % 12 === 0) aux--;
    setLimit(aux);
  }

  const fillCurrent = () => {
    let aux = [];
    let limitAux;
    if (cards.length > 10) {
      (index === limit * 12) ? limitAux = cards.length % 12 : limitAux = 12;
      for(let i = index ; i < index + limitAux; i++) {
        aux[i] = cards[i];
      }
    setCurrent(aux);
    }
  }

  const moveIndex = (num) => {
      setIndex(num);   
  }
  
  if (current.length !== 0) {
    return (
      <div>
        {current.map((item) => {
          return<Card key={item.id} item={item}/>
        })}
        <MoveBar index={index} moveIndex={moveIndex} limit={limit}/>
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