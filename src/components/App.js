import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import Info from "./Info";
import Cart from "./Cart";
import "./style.css";

const App = () => {
  const [ index, setIndex ] = useState(0);
  const [ cards, setCards ] = useState([]);
  const [ limit, setLimit ] = useState(0);
  const [ cart, setCart ] = useState([]);
  const [ hideCart, setHideCart ] = useState(true);

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
        if (+q + card.quantity >= 50){
          q = 50;
          return { ...card, quantity: 50}
        }
        else {
          return { ...card, quantity: card.quantity + q};
        }
      }
      else return card;   
    })
    if (itemIsAdded === false) {
      item.quantity = q;
      arr.push(item);
    }
    setCart(arr);
  }

  const changeQuantity = (item, q) => {
    let arr ;
    let remove = false;
    let index;
    arr = cart.map((card) => {
      if (card.id === item.id) {
        if (+q + card.quantity >= 50){
          q = 50;
          return { ...card, quantity: 50}
        } 
        if (card.quantity + q <= 0){
          remove = true;
          index = cart.indexOf(card);
        }  
        return { ...card, quantity: card.quantity + q}
      }
      else return card;   
    })
    if(remove === true) arr.splice(index, 1);
    setCart(arr);
  }

  const handleChange = (item, q) => {
    let arr ;
    let remove = false;
    let index;
    arr = cart.map((card) => {
      if (card.id === item.id) {
        if (+q >= 50){
          q = 50;
          return { ...card, quantity: 50}
        }  
        if (+q <= 0){
          remove = true;
          index = cart.indexOf(card);
        }  
        return { ...card, quantity: +q}
      }
      else return card;   
    })
    if(remove === true) arr.splice(index, 1);
    setCart(arr);
  }

  const toggleCart = () => {
    if (hideCart === true) setHideCart(false);
    else setHideCart(true);
  }

  const emptyCart = () => {
    setCart([]);
  }
  
  return (
    <BrowserRouter>
      <Nav onClick={toggleCart}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop index={index} moveIndex={moveIndex} limit={limit} cards={cards}/>}>
          <Route path="/shop/:id" element={<Info addItem={addItem} toggleCart={toggleCart} />} />
        </Route>
      </Routes>
      <Cart hide = {hideCart} cart={cart} changeQuantity={changeQuantity} emptyCart={emptyCart}
          toggleCart={toggleCart} handleChange={handleChange}/>
    </BrowserRouter>
  );
};

export default App;