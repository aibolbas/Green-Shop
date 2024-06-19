import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import './header.css'
import { useState } from 'react';
import axios from 'axios';


function Header(){

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

    function reload(){
        Location.reload()
    }
    const wrap = useRef()
    const Login = useRef()
    const Regis = useRef()
    const LoginT = useRef()
    const RegisT = useRef()
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
    return(
        <div className="Head">
            <div className="Logo">
                <img src={process.env.PUBLIC_URL + '/pics/Logo.svg'} className="logo_pic" alt="" />
                <p>GREENSHOP</p>
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
                    <Link onClick={reload} to={'/cart'}><img src={process.env.PUBLIC_URL + '/pics/Cart.svg'} className="" alt="" /></Link>
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
                            <p>Enter your username and password to login.</p>
                            <form>
                                <input className="LoginInput" placeholder="Example@gmail.com" type="email" />
                                <input className="LoginInput" placeholder="Password" type="password" />
                                <button type="submit" className="LoginBtn">Login</button>
                            </form>
                        </div>
                        <div ref={Regis} className="RegisDiv">
                            <p>Enter your email and password to register.</p>
                            {/* <form onSubmit={handleSubmitR}>
                                <input className="LoginInput" placeholder="UserName" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input className="LoginInput" placeholder="Example@gmail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input className="LoginInput" placeholder="Password" type="password"value={password} onChange={(e) => setPassword(e.target.value)} />
                                <input className="LoginInput" placeholder="Confirm Password" type="password" />
                                <button type="submit" className="LoginBtn">Register</button>
                            </form> */}


<form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
      </div>
      <button type="submit">Register</button>
    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header