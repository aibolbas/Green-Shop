import './App.css';
import Header from './components/MainPage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/MainPage/footer/footer';


function App() {



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