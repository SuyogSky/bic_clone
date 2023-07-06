// import React from "react";
import "./admission.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Admission = () => {
    const navigate = useNavigate();

    return (
        <>
<NavBar/>
            <div class="desc">
                <div class="column1">
                    <div class="Heading">
                        <h2>Be like a sunflower</h2>
                    </div>
                    <div class="description">
                        <div className="change">
                            <img src={require("../../assets/Img/sunflower.jpg")} alt="nghd" />
                        </div>

                        <p>Different kinds of flowers may be seen in the garden, each imposing their own beauty and uniqueness. Similar to how roses have their own beauty and distinctiveness that imposes varied colors, sunflowers too have these qualities. When people talk about how special sunflowers are, they hold their heads high as they follow the sun, absorbing its light and energy, then stay motionless and flourish with dignity without turning to face their shadow or feel the darkness.</p>
                        <p>Well, speaking of sunflowers, they are one of my favorite flowers and the inspiration for my persistence on my path. I believe that we can all relate to sunflowers in some way. Both they and we have our own time frames. They require sunlight to bloom, and once they do, they glow magnificently. Similar to how we need inspiration and motivation to move forward, we gradually change in appearance and conduct as we approach closer to achieving our goals. But it's uncertain whether we were content enough or if we were moving on with optimistic thoughts free of jealousy and enmity.</p>
                        <p>But do you believe that feeling resentful and envious is worthwhile? Can't we reach our goal by having an optimistic mindset, like the sunflowers do? </p>
                        <p>A renowned author Helen Keller once said, “Keep your face to the sunshine and you cannot see the shadow. It’s what sunflowers do.” which is a beautiful description of the nature of sunflower. This urges us to learn from this plant. Life, as we all know, has both a bright side and a dark side. A shadow resembles a nasty or negative thing that could lead us astray, whereas a bright side shows us moving in the proper direction toward our aim as we bloom and sparkle and make progress.</p>
                        <p>Sunflowers grow with their faces toward the light as accordance to nature, yet it seems that we humans are not connected to it. The ability to discriminate between good and evil, as well as between right and wrong, should therefore be something we can cultivate in order to go forward in the adequate direction just like the sunflower does with its beautiful smile.</p>
                        <p> Well, do you know sunflower bears a beautiful smile symbolizing happiness, admiration, peace, its honesty and optimism?</p>
                        <p>However, sunflower knows where it belongs and blooms gloriously, we as humans ought to recognize our value and proceed in life with pride and dignity. But since every flower has its own time to bloom, just like we do, we should have patience, be steadfast in our efforts, and have faith in our ability to reach it. Laurie Jean Sennott, a nature enthusiast, once said that "Every flower must grow through dirt." So, we should stop dwelling on our imperfections and troubled past. As we travel through life, we may come across various strange situations and may have even engaged in them ourselves. So, by learning from these experiences, let's advance and blossom like sunflowers.</p>
                        <p>Along the way, we may encounter both admiration and criticism. Within those instances, it's important to be strong, bold, and true to who you are. As we all know, flowers need both sunlight and rain to flourish, and people are no different. And the day will come when you look back and see all along you were blooming and glowing and smiling like a sunflower.</p>
                    </div>


                </div>
                <div class="column2">
                    <div class="first">
                        <div class="title">
                            <span>Recent Posts</span>
                        </div>
                        <br />
                        <div class="sideimages">
                            <img src={require("../../assets/Img/aa.jpg")} alt="nghd" onClick={() => navigate('/xmas')}/>                                </div>
                        <div class="Heading2">
                            <h2 class="sidetext">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h2>
                            <p>A common refrain that I hear from parents and teachers is, ‘children don’t listen to us.’ And my standard
                                response is, ‘do you model the expected behavior?’ Most people mistake the wisdom contained in this
                                question...</p>
                        </div>
                        <button>Read more</button>
                    </div>
                    <br />
                    <div class="second">
                        <div class="sideimages">
                            <img src={require("../../assets/Img/Rashmi Atal.png")} alt="nghd" />
                        </div>
                        <div class="Heading2">
                            <h2 class="sidetext">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h2>
                            <p>A common refrain that I hear from parents and teachers is, ‘children don’t listen to us.’ And my standard
                                response is, ‘do you model the expected behavior?’ Most people mistake the wisdom contained in this
                                question...</p>
                        </div>
                        <button>Read more</button>
                    </div>
                </div>
            </div>

        </>
    );


}
export default Admission;

