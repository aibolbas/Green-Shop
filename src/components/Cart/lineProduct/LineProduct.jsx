import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./lineproduct.css"

function LineProduct(){
    const [counter,setCounter] = useState(1)
    const [price,setPrice] = useState(119 * counter)
    function Dec(){
        if(counter > 1){
            setCounter(counter - 1)
        }
        if(counter >= 2){
            setPrice(counter * 119-119)
        }
        
    }
    function Inc(){
        if(counter < 99){
            setCounter(counter + 1)
            
        }else{
            alert("99 is Max")
        }
        if(counter <= 99){
            setPrice(counter * 119 + 119)
        }
        
    }
    function reload(){
        localStorage.clear()
        Location.reload()
    }
    return(
        <div className="LineProduct">
            <div className="productOption productImg">
                <img className="proImg" src={process.env.PUBLIC_URL + '/pics/Daisy.svg'} alt="" />
            </div>
            <div className="productOption productName">
                <div className="RName">
                    <p>Barbenton Daisy</p>
                    <p className="hollow">SKU: 1995751877966</p>
                </div>
            </div>
            <div className=" productPrice">
                <p>119$</p>
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