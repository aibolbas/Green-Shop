import React from "react";
import { Link } from "react-router-dom";
import "./network.css"

function NetworkErr(){
    return(
        <>
            <Link className="link" to='/main'><p>{`<Back` }</p></Link>
            <div className="ddt">
                <img src={process.env.PUBLIC_URL + '/pics/wifi.png'} className='wifi' alt="" />
                <h1>Network Error</h1>
            </div>
            
        </>
    )
}

export default NetworkErr