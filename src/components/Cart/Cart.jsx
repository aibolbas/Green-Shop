import React from "react";
import { useRef } from "react";
import Related from "../related/related";
import "./cart.css"
import LineProduct from "./lineProduct/LineProduct";

function Cart(){
    const ref = useRef()
    let res = localStorage.getItem("Product")
    function reveal (){
        ref.current.style.display = "flex"
    }
    function close (){
        ref.current.style.display = "none"
    }
    if(res == null){
        return(
            <>
            <div className="EmptyCart">
                <img className="EmptyImg" src={process.env.PUBLIC_URL + '/pics/emptyCart.jpg'} alt="" />
                <h1>Cart Empty</h1>
            </div>
            <Related></Related>
            </>
        )
    }else{
        return(
            <>
            <div className="cart">
                <div className="cartLeft">
                    <div className="cartInfo">
                        <div className="infoName">Product</div>
                        <div className="infoPrice">Price</div>
                        <div className="infoQuan">Quantity</div>
                        <div className="infoTotal">Total</div>
                    </div>
                    <div className="productList">
                        <LineProduct></LineProduct>
                    </div>
                </div>
                {/* <div className="cartRight"></div> */}
            </div>
            <button onClick={reveal} className="OrderBtn">Order</button>
            <div ref={ref} className="succesWrap">
                <div className="succesMain">
                    <img src={process.env.PUBLIC_URL + '/pics/Thank.svg'} alt="" />
                    <p>Your order has been received</p>
                    <p onClick={close} className="close">X</p>
                </div>
            </div>
            <Related></Related>
            </>
        )
    }
    
}

export default Cart