import React from "react";
import { useState } from "react";
import Related from "../related/related";
import './productpage.css'

function ProductPage(){
    const [img,setImg] = useState(process.env.PUBLIC_URL + '/pics/Daisy.svg')
    function click1(e){
        setImg(process.env.PUBLIC_URL + '/pics/Daisy.svg')
    }
    function click2(e){
        setImg(process.env.PUBLIC_URL + '/pics/SecondPlant.svg')
    }
    function AddCart(e){

        localStorage.setItem("Product",JSON.stringify(["daisy"]))
    }
    return(
        <>
            <div className="shopMain">
                <div className="shopUp">
                    <div className="shopUpRight">
                        <div className="shopUpRightRight">
                            <img onClick={click1} src={process.env.PUBLIC_URL + '/pics/Daisy.svg'} alt="" />
                            <img onClick={click2} src={process.env.PUBLIC_URL + '/pics/SecondPlant.svg'} alt="" />
                            <img onClick={click1} src={process.env.PUBLIC_URL + '/pics/Daisy.svg'} alt="" />
                            <img onClick={click2} src={process.env.PUBLIC_URL + '/pics/SecondPlant.svg'} alt="" />
                        </div>
                        <div className="shopUpRightLeft">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="shopUpLeft">
                        <h3>Barbenton Daisy</h3>
                        <p className="price">119$</p>
                        <h4>Short Description</h4>
                        <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                        <button onClick={AddCart} className="shopBtn">Add to cart</button>
                        <p className="hollow">SKU: 1995751877966</p>
                        <p className="hollow">Categories: Potter Plants</p>
                        <p className="hollow">Tags: Home, Garden, Plants</p>
                    </div>
                </div>
                <div className="shopDown">
                    <h2>Product Description</h2>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                    <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    <h4>Living Room:</h4>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h4>Dining Room:</h4>
                    <p>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
                    <h4>Office</h4>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <Related></Related>
        </>
    )
}
export default ProductPage