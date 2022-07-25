import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";

const RouteSwitch = () => {
 
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;