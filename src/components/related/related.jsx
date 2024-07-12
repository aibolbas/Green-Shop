import React from "react";
import Product from "../Shop/Product";
import "./related.css"

function Related(){
    return(
        <div className="relatedMain">
            <div className="relatedUp">
                <h2 className="">You May be Interested in</h2>
            </div>
            <div className="relatedDown">
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
                    <Product link={'/ever'} img={process.env.PUBLIC_URL + '/pics/Evergreen.svg'}  name={'Chinese Evergreen'} price={"39.00$"}/>
                    <Product link={'/alum'} img={process.env.PUBLIC_URL + '/pics/Aluminum.svg'}  name={'Aluminum Plant'} price={"179.00$"}/>
                    <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pics/Daisy.svg'}  name={'Barbenton Daisy'} price={"119.00$"}/>
            </div>
        </div>
    )
}

export default Related