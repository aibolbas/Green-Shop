import React from "react";
import { Link } from "react-router-dom";
import './product.css'

function Product(props){
    return(
        <>
        <Link className="product_link" to={props.link}>
            <div className="product_carcass">
                <div className="product_pic">
                    <img src={props.img} alt="" className="product_img" />
                </div>
                <div className="product_info">
                    <h3>{props.name}</h3>
                    <p>{props.price}</p>
                </div>
            </div>
        </Link>
        
        </>
    )
}

export default Product