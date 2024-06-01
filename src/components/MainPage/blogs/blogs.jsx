import React from "react";
import './blogs.css'

function BlogS(){
    return(
        <>
        <div className="blogsMain">
            <div className="blogsUp">
                <h2>Our Blog Posts</h2>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            </div>
            <div className="blogsDown">
                <div className="blogs1">
                    <img src={process.env.PUBLIC_URL + '/pics/cactus2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/Cactus.svg'} alt="" />
                </div>
                <div className="blogs1">
                    <img src={process.env.PUBLIC_URL + '/pics/Succulent2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/Succulent.svg'} alt="" />
                </div>
                <div className="blogs1">
                    <img src={process.env.PUBLIC_URL + '/pics/Care2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/Care.svg'} alt="" />
                </div>
                <div className="blogs1">
                    <img src={process.env.PUBLIC_URL + '/pics/House2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/House.svg'} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogS