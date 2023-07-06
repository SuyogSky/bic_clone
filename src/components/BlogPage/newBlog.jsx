import "./newBlog.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import NavBar from '../NavBar/NavBar';
// function underline(){

// }
const Homepageofblogs = () => {

    var array = [1, 2, 3, 4, 5, 6, 9]

    const navigate = useNavigate();


    return (<>
        <div className="individuals">
            <div className="secondImage" >
                <img src={require("../../assets/Img/The Power of Darkness (1).png")} alt="hi" onClick={() => navigate('/dark')} /><br />
            </div>
            <h3 className="Text1">The Power of Darkness: Lesson Learned - Rohan Roka Chettri</h3><br />

        </div>
    </>)



}

const NewBlog = () => {

    const navigate = useNavigate();
    const num = [3, 8, 11, 7]
    return (
        <>
            <NavBar />
            <div class="Christmas">
                <div class="firstColumn">
                    {/* <h2 class="Text">Be like a sunflower</h2> */}
                    <div className="mainImage">
                        <img onClick={() => navigate('/blog')} src={require("../../assets/Img/sunflower.jpg")} alt="hi" class="firstPhoto" />
                    </div>
                </div>
                <div className="secondColumn">

                    {num.map((n) => <Homepageofblogs />)}


                </div>

            </div>

        </>

    )

}

export default NewBlog;