// import React from "react";
import "./admission.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Christmas = () => {

    const navigate = useNavigate();

    return (
        <>
<NavBar/>
            <div class="desc">
                <div class="column1">
                    <div class="Heading">
                        <h2>The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h2>
                    </div>
                    <div class="description" >
                        <div className="change">
                            <img src={require("../../assets/Img/aa.jpg")} alt="nghd" />
                        </div>

                        <p>A common refrain that I hear from parents and teachers is, ‘children don’t listen to us.’ And my standard response is, ‘do you model the expected behavior?’ Most people mistake the wisdom contained in this question as a simplistic solution. As I am, so is my child: that’s my simple mantra for parents and teachers. Most researches support this sure shot formula as what we adults do, shouts louder than words. Let’s reflect upon some basic concerns.</p>                        <p>Well, speaking of sunflowers, they are one of my favorite flowers and the inspiration for my persistence on my path. I believe that we can all relate to sunflowers in some way. Both they and we have our own time frames. They require sunlight to bloom, and once they do, they glow magnificently. Similar to how we need inspiration and motivation to move forward, we gradually change in appearance and conduct as we approach closer to achieving our goals. But it's uncertain whether we were content enough or if we were moving on with optimistic thoughts free of jealousy and enmity.</p>
                        <p>We require children to listen to us, but how many of us listen to their spoken and unspoken needs or anguish? Forget children, how many of us listen to anyone else with our full being? We insist that children must eat healthy. However, when children are young and impressionable, we introduce them to chocolate, chips and sugared drinks. Not only that, we also give these out as rewards, indirectly reinforcing the concept that these foods are well-earned treats. Why don’t we consider giving a carrot or an apple as a treat? We say today’s generation is hooked to their gadgets but many of us find it virtually impossible to survive without our daily gizmo fix. We consider their behavior bratty and impolite but how many of us talk respectfully and kindly to our elders, our support staff or the physically and mentally challenged?</p>                        <p>A renowned author Helen Keller once said, “Keep your face to the sunshine and you cannot see the shadow. It’s what sunflowers do.” which is a beautiful description of the nature of sunflower. This urges us to learn from this plant. Life, as we all know, has both a bright side and a dark side. A shadow resembles a nasty or negative thing that could lead us astray, whereas a bright side shows us moving in the proper direction toward our aim as we bloom and sparkle and make progress.</p>
                        <p>We rue the fact that children are unconnected to trees, ants and the bees but our leisure time activities consist chiefly of walking through the mall and catching the latest Friday release. When was the last time you walked on the beach or visited a nature reserve? We complain that children fib and fight but they find us lying through our teeth, holding grudges and plotting revenge on all and sundry. We often nag our children to do their work on time, yet do they find us organized and efficient at all times? We want children to read and grow in knowledge; are books merely part of our home décor or are they living and breathing entities that challenge our thinking and provoke dialogue? How often are daily happenings swapped at dinnertime? Do we share uplifting human stories? Do we discuss art, literature, scientific breakthroughs and politics; or are these moments wasted in lecturing and moralizing?</p>                        <p> Well, do you know sunflower bears a beautiful smile symbolizing happiness, admiration, peace, its honesty and optimism?</p>
                        <p>We expect children to be global citizens who will be at ease with people from diverse backgrounds; do we encourage deep and real relationships with those who are different from us or are our minds encased in ghettos? Children will learn compassion when they see our random acts of kindness as well as engage with the socio-economic realities of our country. Children will learn the meaning of gratitude when they see us expressing our heartfelt thanks to those who care for us. Children will learn forgiveness when they find us seeking forgiveness or forgiving those who have caused us harm.</p>                        <p>Along the way, we may encounter both admiration and criticism. Within those instances, it's important to be strong, bold, and true to who you are. As we all know, flowers need both sunlight and rain to flourish, and people are no different. And the day will come when you look back and see all along you were blooming and glowing and smiling like a sunflower.</p>
                        <p> must end with a disclaimer: children will be children and may sometimes do the wrong thing in spite of our exemplary actions; let’s learn to ignore the occasional misdemeanor. At the same time being human, we may not be the perfect role models; let’s learn to forgive ourselves and move on. As long as they see us striving to function from our most authentic self, the seeds we have sown will take root someday. But remember, our thoughts, words and actions influence children more than we think they do; let’s walk our talk, starting today.</p>
                    </div>


                </div>
                <div class="column2">
                    <div class="first">
                        <div class="title">
                            <span>Recent Posts</span>
                        </div>
                        <br />
                        <div class="sideimages">
                            <img src={require("../../assets/Img/Rashmi Atal.png")} alt="nghd" />                                </div>
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
                            <img src={require("../../assets/Img/Thumbnail.png")} alt="nghd" />
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
export default Christmas;

