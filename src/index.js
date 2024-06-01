import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guides from './components/Guide/Guides';
import Blogs from './components/Blogs/Blogs';
import Product from './components/Shop/Product';
import MainPage from './components/MainPage/MainPage/MainPage';
import Header from './components/MainPage/Header/Header';
import ProductPage from './components/productPage/productpage';
import Cart from './components/Cart/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route exact path='/main' element={<MainPage/>}></Route>
          <Route exact path="/guide" element={<Guides/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/shop" element={<ProductPage/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals