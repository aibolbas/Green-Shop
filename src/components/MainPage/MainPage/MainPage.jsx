import React from "react";
import { Link, Outlet, Router } from "react-router-dom";
import BlogS from "../blogs/blogs";
import Blogs from "../blogs/blogs";
import Category from "../category/category";
import Plantcare from "../plantcare/plantcare";
import Market from "../shop/shop";
import './mainpage.css'

function MainPage(){
    return(
        <>
            <div className="Mainpage">
                <div className="Mainpage_left">
                    <div className="Mainpage_up_text">WELCOME TO GREENSHOP</div>
                    <div className="Mainpage_up_header">LET'S MAKE A</div>
                    <div className="Mainpage_down_header">BETTER <span className="green">PLANET</span></div>
                    <div className="Mainpage_down_text">
                        <p className="Mainpage_down_par">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        <p className="Mainpage_down_par2">Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    </div>
                    <Link to={"/shop"}><button className="shop">SHOP NOW</button></Link>
                </div>
                <div className="Mainpage_right">
                    <img className="Mainpage_img" src={process.env.PUBLIC_URL + '/pics/Plant.svg'} alt="" />
                    <img className="Mainpage_img_small" src={process.env.PUBLIC_URL + '/pics/Plant.svg'} alt="" />
                </div>
            </div>
            <div className="AdaptiveMainPage">
                <img className="adaptiveMainPageImg" src={process.env.PUBLIC_URL + '/pics/AdaptPlant.png'} alt="" />
                <img className="adaptiveMainPageText" src={process.env.PUBLIC_URL + '/pics/Group.svg'} alt="" />
                <Link to={"/shop"} className="AdaptMainLink">
                    <p>Shop Now</p>
                    <img className="Arrow" src={process.env.PUBLIC_URL + '/pics/AdaptArrow.svg'} alt="" />
                    </Link>
                
            </div>
            
            <Market></Market>
            <Plantcare></Plantcare>
            <BlogS></BlogS>
        </>
    )
}

export default MainPage