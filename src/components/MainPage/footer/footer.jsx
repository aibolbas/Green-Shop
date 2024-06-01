import React from "react";
import './footer.css'

function Footer(){
    return(
        <>
        <div className="footerMain">
            <div className="footerUp">
                <div className="footerUp1">
                    <img src={process.env.PUBLIC_URL + '/pics/cacti.svg'} alt="" />
                </div>
                <div className="footerUp2">
                    <img src={process.env.PUBLIC_URL + '/pics/cacti2.svg'} alt="" />
                </div>
                <div className="footerUp3">
                    <img src={process.env.PUBLIC_URL + '/pics/cacti3.svg'} alt="" />
                </div>
            </div>
            <div className="footerMid">
                <div className="footerMid1">
                    <img src={process.env.PUBLIC_URL + '/pics/Logo.svg'} className="logo_pic" alt="" />
                    <p>GREENSHOP</p>
                </div>
                <div className="footerMid1">
                    <img src={process.env.PUBLIC_URL + '/pics/Location.svg'} alt="" />
                    <p>Maylenova 92</p>
                </div>
                <div className="footerMid1">
                    <img src={process.env.PUBLIC_URL + '/pics/Message.svg'} alt="" />
                    <p>Contact@greenshop</p>
                </div>
                <div className="footerMid1">
                    <img src={process.env.PUBLIC_URL + '/pics/Calling.svg'} alt="" />
                    <p>+77479883696</p>
                </div>
            </div>
            <div className="footerDown">
                <p>© 2024 GreenShop. All Rights Reserved.</p>
            </div>
        </div>
        </>
    )
}
export default Footer