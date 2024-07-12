import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./lineproduct.css"

function LineProduct(props){
    const [counter,setCounter] = useState(1)
    const [price,setPrice] = useState(props.price * counter)
    function Dec(){
        if(counter > 1){
            setCounter(counter - 1)
        }
        if(counter >= 2){
            setPrice(counter * props.price - props.price)
        }
        
    }
    function Inc(){
        if(counter < 99){
            setCounter(counter + 1)
            
        }else{
            alert("99 is Max")
        }
        if(counter <= 99){
            setPrice(counter * props.price + props.price)
        }
        
    }
    function reload(){
        if (props.name == "Barbenton Daisy") {
            localStorage.removeItem("Product")
            Location.reload()
        }
        if (props.name == "Aluminum Plant") {
            localStorage.removeItem("Alu")
            Location.reload()
        }
        if (props.name == "Chinese Evergreen") {
            localStorage.removeItem("Evergreen")
            Location.reload()
        }
        
    }
    return(
        <div className="LineProduct">
            <div className="productOption productImg">
                <img className="proImg" src={process.env.PUBLIC_URL + `/pics/${props.img}.svg`} alt="" />
            </div>
            <div className="productOption productName">
                <div className="RName">
                    <p>{props.name}</p>
                    <p className="hollow">SKU: 1995751877966</p>
                </div>
            </div>
            <div className=" productPrice">
                <p>{props.price}$</p>
            </div>
            <div className="productQuan">
                <button onClick={Dec} className="Dec">-</button>
                <p className="count">{counter}</p>
                <button onClick={Inc} className="Inc">+</button>
            </div>
            <div className="productOption productTotal">
                <p className="proPrice">{price}$</p>
            </div>
            <div className="productOption productDel">
                <div className="ProDel">
                    <Link onClick={reload} to={"/cart"}><img  src={process.env.PUBLIC_URL + '/pics/Delete.svg'} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default LineProduct