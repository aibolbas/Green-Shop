import React from "react";
import { useRef } from "react";
import Related from "../related/related";
import "./cart.css"
import LineProduct from "./lineProduct/LineProduct";

function Cart(){
    const ref = useRef()
    let res = localStorage.getItem("Product")
    let ever = localStorage.getItem("Evergreen")
    let alum = localStorage.getItem("Alu")
    function reveal (){
        ref.current.style.display = "flex"
    }
    function close (){
        ref.current.style.display = "none"
    }
    if(res == null && ever == null && alum == null){
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
        if (res != null && ever == null && alum == null) {
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
                            <LineProduct price={119} img={'Daisy'} name={'Barbenton Daisy'}></LineProduct>
                        </div>
                    </div>
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
        if (res != null && ever != null && alum == null) {
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
                            <LineProduct price={119} img={'Daisy'} name={'Barbenton Daisy'}></LineProduct>
                            <LineProduct price={39} img={'Evergreen'} name={'Chinese Evergreen'}></LineProduct>
                        </div>
                    </div>
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
        if (res != null && ever != null && alum != null) {
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
                            <LineProduct price={119} img={'Daisy'} name={'Barbenton Daisy'}></LineProduct>
                            <LineProduct price={179} img={'Aluminum'} name={'Aluminum Plant'}></LineProduct>
                            <LineProduct price={39} img={'Evergreen'} name={'Chinese Evergreen'}></LineProduct>
                        </div>
                    </div>
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
        if (ever != null && res == null && alum == null) {
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
                            <LineProduct price={39} img={'Evergreen'} name={'Chinese Evergreen'}></LineProduct>
                        </div>
                    </div>
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
        if (ever != null && res == null && alum != null) {
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
                            <LineProduct price={39} img={'Evergreen'} name={'Chinese Evergreen'}></LineProduct>
                            <LineProduct price={179} img={'Aluminum'} name={'Aluminum Plant'}></LineProduct>
                        </div>
                    </div>
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
        if (alum != null && ever == null && res == null) {
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
                            <LineProduct price={179} img={'Aluminum'} name={'Aluminum Plant'}></LineProduct>
                        </div>
                    </div>
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
        if (alum != null && ever == null && res != null) {
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
                            <LineProduct price={179} img={'Aluminum'} name={'Aluminum Plant'}></LineProduct>
                            <LineProduct price={119} img={'Daisy'} name={'Barbenton Daisy'}></LineProduct>
                        </div>
                    </div>
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
    
    
}

export default Cart