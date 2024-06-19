import React from "react";
import './category.css'

function Category(){
    return(
        <div className="main_category">
            <div className="categories">
                <div className="categories_up">
                    <h3 className="category_header">Categories</h3>
                </div>
                <div className="categories_options">
                        <p>House Plants</p>
                        <p>Potted Plants</p>
                        <p>Seeds</p>
                        <p>Succulents</p>
                        <p>Trerrariums</p>
                        <p>Gardening</p>
                        <p>Accessories</p>
                </div>
            </div>
            {/* <div className="categories_cost">
                <div className="categories_cost_up">
                    <h3>Price Range</h3>
                </div>
                <div className="categories_cost_down">
                    <div className="range"></div>
                    <div className="categories_cost_down_range">
                        <p>Price:</p>
                        <button className="range_btn">Filter</button>
                    </div>

                </div>
            </div> */}
            <div className="categories_size">
                <div className="categories_size_up">
                    <h3>Size</h3>
                </div>
                <div className="categories_size_down">
                    <p>Big</p>
                    <p>Medium</p>
                    <p>Small</p>
                </div>
            </div>
            <div className="categories_ad">
                <img src={process.env.PUBLIC_URL + '/pics/Ad.svg'} alt="" className="ad" />
            </div>
        </div>
    )
}

export default Category