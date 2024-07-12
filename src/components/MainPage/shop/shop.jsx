import React from "react";
import Product from "../../Shop/Product";
import Category from "../category/category";
import './shop.css'

function Market () {
    return(
        <div className="main_market">
            <div className="category">
                <Category></Category>
            </div>
            <div className="market">
                <div className="market_head">
                    <div className="market_head_options">
                        <p className="market_head_options_text">All Plants</p>
                        <p>New Arrivals</p>
                        <p>Sale</p>
                    </div>
                    <div className="market_head_sorting"></div>
                </div>
                <div className="market_products">
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
                    <Product link={'/ever'} img={process.env.PUBLIC_URL + '/pics/Evergreen.svg'}  name={'Barbenton Daisy'} price={"39.00$"}/>
                    <Product link={'/alum'} img={process.env.PUBLIC_URL + '/pics/Aluminum.svg'}  name={'Aluminum Plant '} price={"179.00$"}/>
                    <Product link={'/alum'} img={process.env.PUBLIC_URL + '/pics/Aluminum.svg'}  name={'Aluminum Plant '} price={"179.00$"}/>
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
                    <Product link={'/ever'} img={process.env.PUBLIC_URL + '/pics/Evergreen.svg'}  name={'Barbenton Daisy'} price={"39.00$"}/>
                    <Product link={'/ever'} img={process.env.PUBLIC_URL + '/pics/Evergreen.svg'}  name={'Barbenton Daisy'} price={"39.00$"}/>
                    <Product link={'/alum'} img={process.env.PUBLIC_URL + '/pics/Aluminum.svg'}  name={'Aluminum Plant '} price={"179.00$"}/>
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
                </div>
                <div className="adaptmarket_products">
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
                    <Product link={'/ever'} img={process.env.PUBLIC_URL + '/pics/Evergreen.svg'}  name={'Barbenton Daisy'} price={"39.00$"}/>
                    <Product link={'/alum'} img={process.env.PUBLIC_URL + '/pics/Aluminum.svg'}  name={'Aluminum Plant '} price={"179.00$"}/>
                    <Product link={'/alum'} img={process.env.PUBLIC_URL + '/pics/Aluminum.svg'}  name={'Aluminum Plant '} price={"179.00$"}/>
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
                    <Product link={'/ever'} img={process.env.PUBLIC_URL + '/pics/Evergreen.svg'}  name={'Barbenton Daisy'} price={"39.00$"}/>
                </div>
            </div>
        </div>
    )
}

export default Market