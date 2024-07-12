import React from "react";
import { useRef } from "react";
import { Link, redirect } from "react-router-dom";
import './header.css'
import { useState } from 'react';
import axios from 'axios';
import { ThemeContext } from "../../context/LoginContext";



function Header(){

    const {  toggle, log ,Search , toggleS} = React.useContext(ThemeContext)

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  

  const handleSubmit = async(e) =>{
    try{
      const response = await axios.post('/api/users/register', {username, email,password});
      console.log(response.data);
      
    }
    catch(err){
      console.error(err.response?.data);
    }
  };

  function Sub(){
    window.location.href = 'http://localhost:3002/NE'
  }

  const handleLogin = async(e) => {
    try{
        const response = await axios.post("/api/users/login", {email,password},{withCredentials:true})
        toggle()
        alert(response.data.message)
    }catch(error){
        console.error("error", error.response?.data || error.message)
        if (error.response?.data.message || error.message) {
            window.location.href = 'http://localhost:3004/NE'
        }
    }
  }

    
    const wrap = useRef()
    const Login = useRef()
    const Regis = useRef()
    const LoginT = useRef()
    const RegisT = useRef()
    const Sdiv = useRef()
    const Sinp = useRef()
    const Swin = useRef()
    const Slin = useRef()
    const Sever = useRef()
    const Salum = useRef()
    function closeLogin(){
        wrap.current.style.display = "none"
    }
    function LoginOpen() {
        wrap.current.style.display = "flex"
    }
    function LoginOp(){
        Login.current.style.display = "flex"
        Regis.current.style.display = "none"
        LoginT.current.style.color = "rgba(70, 163, 88, 1)"
        RegisT.current.style.color = "Black"
    }
    function RegisOp() {
        Login.current.style.display = "none"
        Regis.current.style.display = "flex"
        LoginT.current.style.color = "Black"
        RegisT.current.style.color = "rgba(70, 163, 88, 1)"
    }
    

    function Reload(){
        if (log === true) {
            window.location.href = 'http://localhost:3004/cart'
        }else{
            LoginOpen()
        }
        
    }

    const [pass,setPass] = useState(false)
    const [ever,setever] = useState(false)
    const [alum,setalum] = useState(false)
    const [dai,setdai] = useState(false)

    function Se(){
        let B = "barbenton daisy"
        let E = "chinese evergreen"
        let A = "aluminum plant"

        if (Sinp.current.value.length > 1) {
            setPass(true)
        }
        
        if (B.toLocaleUpperCase().search(Sinp.current.value.toLocaleUpperCase()) !== -1) {
            setdai(true)

        }else{
            setdai(false)
        }
        if (E.toLocaleUpperCase().search(Sinp.current.value.toLocaleUpperCase()) !== -1) {
            setever(true)

        }else{
            setever(false)
        }
        if (A.toLocaleUpperCase().search(Sinp.current.value.toLocaleUpperCase()) !== -1) {
            setalum(true)

        }else{
            setalum(false)
        }
        if(Sinp.current.value.length <= 1){
            setPass(false)
            setdai(false)
            setalum(false)
            setever(false)
        }
        if (pass === true) {
            Swin.current.style.display = 'block'
        }else{
            Swin.current.style.display = 'none'
        }
        if (ever === true) {
            Sever.current.style.display = 'block'
        }else{
            Sever.current.style.display = 'none'
        }
        if (dai === true) {
            Slin.current.style.display = 'block'
        }else{
            Slin.current.style.display = 'none'
        }
        if (alum === true) {
            Salum.current.style.display = 'block'
        }else{
            Salum.current.style.display = 'none'
        }
        
    }

    return(
        <div className="Head">
            <div ref={Sdiv} className="searchDiv">
                <form >
                        <input ref={Sinp} onInput={Se}  type="text" className='SearchInp'  placeholder="Search your plants"/>
                        </form>
                        <div ref={Swin} className="searchWin">
                            <Link ref={Slin} className="link dais" to={'/shop'}><div className="searchOth">
                                <img src={process.env.PUBLIC_URL + '/pics/Daisy.svg'} className="logo_pic" alt="" />
                                <p>Barbenton Daisy</p>
                                <p>119$</p>
                            </div></Link>
                            <Link ref={Sever} className="link ever" to={'/ever'}><div className="searchOth">
                                <img src={process.env.PUBLIC_URL + '/pics/Evergreen.svg'} className="logo_pic" alt="" />
                                <p>Chinese Evergreen</p>
                                <p>39$</p>
                            </div></Link>
                            <Link ref={Salum} className="link alum" to={'/alum'}><div className="searchOth">
                                <img src={process.env.PUBLIC_URL + '/pics/Aluminum.svg'} className="logo_pic" alt="" />
                                <p>Aluminum Plant</p>
                                <p>179$</p>
                            </div></Link>
                        </div>
                    </div>
            <div className="Logo">
                <Link className="logolink" to={'/main'}>
                <img src={process.env.PUBLIC_URL + '/pics/Logo.svg'} className="logo_pic" alt="" />
                <p>GREENSHOP</p>
                    </Link>
            </div>
            <div className="Links">
                <Link className="link " to='/main'> <div className="home_link">Home</div></Link>
                <Link className="link " to='/shop'> <div className="home_link">Shop</div></Link>
                <Link className="link " to='/guide'> <div className="home_link">Plant Care</div></Link>
                <Link className="link " to='/blogs'> <div className="home_link">Blogs</div></Link>
            </div>
            <div className="Special">
                <div className="icon Search">
                    <input type="text" className="adaptiveInp" placeholder="Search your plants"/>
                    
                    

                    <img src={process.env.PUBLIC_URL + '/pics/Search.svg'} className="search_pic" alt="" />
                </div>
                <div className="icon Cart">
                    {/* <Link  to={'/cart'}> */}
                        <img onClick={Reload} src={process.env.PUBLIC_URL + '/pics/Cart.svg'} className="" alt="" />
                        {/* </Link> */}
                </div>
                <div className="Login">
                    <button onClick={LoginOpen} className="icon login_button" type="submit"><img src={process.env.PUBLIC_URL + '/pics/Logout.svg'} alt="" /> <span className="orin"></span> Login</button>
                </div>
            </div>
            <div ref={wrap} className="Loginwrap">
                <div className="LoginMain">
                    <div className="LoginUp">
                        <p ref={LoginT} onClick={LoginOp} className="LoginTitle">Login</p>
                        <div className="rectan">I</div>
                        <p ref={RegisT} onClick={RegisOp} className="RegisTitle">Register</p>
                        <div onClick={closeLogin} className="LoginClose">X</div>
                    </div>
                    <div className="LoginDown">
                        <div ref={Login} className="LoginDiv">
                            
                            <form onSubmit={handleLogin}>
                                <h2>Login</h2>
                                <div>
                                  
                                  <input placeholder="Example@gmail.com" className="LoginInput" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                                </div>
                                <div>
                                  
                                  <input placeholder="Password" className="LoginInput" type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
                                </div>
                                <button onClick={Sub} className="LoginBtn" type="submit">Login</button>
                            </form>
                        </div>
                        <div ref={Regis} className="RegisDiv">
                            
                            


<form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        
        <input placeholder="Username" className="LoginInput" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
      </div>
      <div>
        <input placeholder="Example@gmail.com" className="LoginInput" type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />
      </div>
      <div>
        
        <input placeholder="Password" className="LoginInput" type="password" value={password} onChange={(e) =>{setPassword(e.target.value); }}/>
      </div>
      <button className="LoginBtn" type="submit">Register</button>
    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header