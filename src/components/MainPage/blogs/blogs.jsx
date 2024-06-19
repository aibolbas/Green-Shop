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
                    <a href="https://hicksnurseries.com/houseplants/cactus-succulents/">
                    <img src={process.env.PUBLIC_URL + '/pics/cactus2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/Cactus.svg'} alt="" />
                    </a>
                    
                </div>
                <div className="blogs1">
                    <a href="https://www.finegardening.com/article/10-outstanding-succulents">
                    <img src={process.env.PUBLIC_URL + '/pics/Succulent2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/Succulent.svg'} alt="" />
                    </a>
                    
                </div>
                <div className="blogs1">
                    <a href="https://hicksnurseries.com/houseplants/cactus-succulents/">
                        <img src={process.env.PUBLIC_URL + '/pics/Care2.svg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/pics/Care.svg'} alt="" />
                    </a>
                </div>
                <div className="blogs1">
                    <a href="https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/">
                    <img src={process.env.PUBLIC_URL + '/pics/House2.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/pics/House.svg'} alt="" />
                    </a>

                </div>
            </div>
        </div>
        <div className="adaptblogsMain">
            <div className="blogsUp">
                <h2>Our Blog Posts</h2>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            </div>
            <div className="blogsDown">
                <div className="blogs1">
                    <a href="https://hicksnurseries.com/houseplants/cactus-succulents/">
                    <img className="blogImg" src={process.env.PUBLIC_URL + '/pics/cactus2.svg'} alt="" />
                    <img className="blogImgText" src={process.env.PUBLIC_URL + '/pics/Cactus.svg'} alt="" />
                    </a>
                    
                </div>
                <div className="blogs1">
                    <a href="https://www.finegardening.com/article/10-outstanding-succulents">
                    <img className="blogImg" src={process.env.PUBLIC_URL + '/pics/Succulent2.svg'} alt="" />
                    <img className="blogImgText" src={process.env.PUBLIC_URL + '/pics/Succulent.svg'} alt="" />
                    </a>
                    
                </div>
                <div className="blogs1">
                    <a href="https://hicksnurseries.com/houseplants/cactus-succulents/">
                        <img className="blogImg" src={process.env.PUBLIC_URL + '/pics/Care2.svg'} alt="" />
                        <img className="blogImgText" src={process.env.PUBLIC_URL + '/pics/Care.svg'} alt="" />
                    </a>
                </div>
                <div className="blogs1">
                    <a href="https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/">
                    <img className="blogImg" src={process.env.PUBLIC_URL + '/pics/House2.svg'} alt="" />
                    <img className="blogImgText" src={process.env.PUBLIC_URL + '/pics/House.svg'} alt="" />
                    </a>

                </div>
            </div>
        </div>
        </>
    )
}
export default BlogS