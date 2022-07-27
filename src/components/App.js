import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import Info from "./Info";

const App = () => {
  const [ index, setIndex ] = useState(0);
  const [ cards, setCards ] = useState([]);
  const [ limit, setLimit ] = useState(0);
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const data = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const items = await data.json();
    setCards(items.data);
    let aux = Math.floor(items.data.length / 12)
    if (items.data.length % 12 === 0) aux--;
    setLimit(aux);
  }

  const moveIndex = (num) => {
    setIndex(num);   
  }

  const addItem = (item, q) => {
    let itemIsAdded = false;
    let arr = [];
    arr = cart.map((card) => {
      if (card.id === item.id) {
        itemIsAdded = true;
        return { ...card, quantity: card.quantity + q}
      }
      else return card;   
    })
    if (itemIsAdded === false) {
      item.quantity = q;
      arr.push(item);
    }
    setCart(arr);
    console.log(arr);
  }
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop index={index} moveIndex={moveIndex} limit={limit} cards={cards}/>}>
          <Route path="/shop/:id" element={<Info addItem={addItem} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;