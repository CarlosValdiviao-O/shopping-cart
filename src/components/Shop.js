import { useEffect, useState } from "react";
import Card from "./Card";
import MoveBar from "./MoveBar"
import { Outlet } from "react-router-dom";

const Shop = (props) => {
  
  const { cards, moveIndex, index, limit, fetchCards} = props;
  const [ current, setCurrent ] = useState([]);
  
  useEffect(() => {
    fillCurrent();
  }, [index, limit]);

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
  
  if (current.length !== 0) {
    return (
      <div id="shop">
        {current.map((item) => {
          return<Card key={item.id} item={item}/>
        })}
        <MoveBar index={index} moveIndex={moveIndex} limit={limit}/>
        <Outlet />
      </div>
      
    );
  }

  else {
    return(
      <div>
        <p>Wait</p>
        <Outlet />
      </div>
      
    )
  } 
};

export default Shop;