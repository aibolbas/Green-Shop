import './App.css';
import Guides from './components/Guide/Guides';
import Blogs from './components/Blogs/Blogs';
import Product from './components/Shop/Product';
import Header from './components/MainPage/Header/Header';
import MainPage from './components/MainPage/MainPage/MainPage';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './components/MainPage/footer/footer';


function App() {
  const [message,setmessage] = useState('')

  useEffect(()=> {
    fetch('/api')
    .then(response => response.json())
    .then(data => setmessage(data.message))
    .catch(err => console.error(err))
  },[])


  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    {/* <p>{message}</p> */}
    </>
  );
}

export default App;