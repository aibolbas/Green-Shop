import React from "react";
import './plantcare.css'

function Plantcare(){
    return(
        <>
        <div className="plantcare_main">
            <div className="plantcareRight">
                <div className="plantcarePic">
                    <img src={process.env.PUBLIC_URL + '/pics/plantcare1.svg'} alt="" />
                </div>
                <div className="plantcareText">
                    <h3>SUMMER CACTUS</h3>
                    <h3 className="miss">& SUCCULENTS</h3>
                    <p>How to care about cactie and their benefits</p>
                    <button className="plantcareBtn">Read More</button>
                </div>
            </div>
            <div className="plantcareLeft">
            <div className="plantcarePic">
                    <img src={process.env.PUBLIC_URL + '/pics/plantcare2.svg'} alt="" />
                </div>
                <div className="plantcareText">
                    <h3>STYLISH TRENDS</h3>
                    <h3 className="miss">& MUCH MORE</h3>
                    <p>How to care about cactie and their benefits</p>
                    <button className="plantcareBtn">Read More</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Plantcare