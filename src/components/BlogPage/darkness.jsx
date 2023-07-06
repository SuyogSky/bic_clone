// import React from "react";
import "./admission.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Darkness = () => {

    const navigate = useNavigate();
    return (
        <>
            <NavBar/>
            <div class="desc">
                <div class="column1">
                    <div class="Heading">
                        <h2>The power of Darkness</h2>
                    </div>
                    <div class="description" >
                        <div className="change">
                            <img src={require("../../assets/Img/The Power of Darkness (1).png")} alt="nghd" />
                        </div>

                        <p>Darkness can cause feelings of fear, uncertainty, and discomfort. However, it can also be a powerful teacher who helps us grow and learn valuable lessons. In the dark, it's hard to see what's ahead. Hence, it might be frightening but this can also develop the chance to embrace the mystery and trust our instinct. So, when you have darkness all around you, it is crucial to find your own light which may entail looking for satisfying relationships and experiences, discovering inner tranquility, or simply accepting your own special abilities and talents. Even in the darkest of times, you can find solace and joy by discovering your own light. It's simple t</p>                        <p>We require children to listen to us, but how many of us listen to their spoken and unspoken needs or anguish? Forget children, how many of us listen to anyone else with our full being? We insist that children must eat healthy. However, when children are young and impressionable, we introduce them to chocolate, chips and sugared drinks. Not only that, we also give these out as rewards, indirectly reinforcing the concept that these foods are well-earned treats. Why don’t we consider giving a carrot or an apple as a treat? We say today’s generation is hooked to their gadgets but many of us find it virtually impossible to survive without our daily gizmo fix. We consider their behavior bratty and impolite but how many of us talk respectfully and kindly to our elders, our support staff or the physically and mentally challenged?</p>                        <p>A renowned author Helen Keller once said, “Keep your face to the sunshine and you cannot see the shadow. It’s what sunflowers do.” which is a beautiful description of the nature of sunflower. This urges us to learn from this plant. Life, as we all know, has both a bright side and a dark side. A shadow resembles a nasty or negative thing that could lead us astray, whereas a bright side shows us moving in the proper direction toward our aim as we bloom and sparkle and make progress.</p>
                        <p>It's simple to take life for granted once the darkness is gone. Darkness can heighten our awareness of the beauty and benefits of light. This can serve as a potent reminder to value and cherish the good things in life. We can let go of the things that are holding us back during the darkness. This may entail letting go of unhelpful thoughts and feelings or letting go of material possessions. We can experience new levels of freedom and peace by simply letting go. As we learn to rely on our own abilities to let go of  unfamiliar situations, the darkness can aid in the development of our sense of independence and self-reliance.</p>                        <p>We expect children to be global citizens who will be at ease with people from diverse backgrounds; do we encourage deep and real relationships with those who are different from us or are our minds encased in ghettos? Children will learn compassion when they see our random acts of kindness as well as engage with the socio-economic realities of our country. Children will learn the meaning of gratitude when they see us expressing our heartfelt thanks to those who care for us. Children will learn forgiveness when they find us seeking forgiveness or forgiving those who have caused us harm.</p>                        <p>Along the way, we may encounter both admiration and criticism. Within those instances, it's important to be strong, bold, and true to who you are. As we all know, flowers need both sunlight and rain to flourish, and people are no different. And the day will come when you look back and see all along you were blooming and glowing and smiling like a sunflower.</p>
                        <p>The light will eventually reappear, so darkness is only momentary. This may serve as a reminder that change is a necessary component of life and that we should welcome it with open arms. By accepting change, we can develop our ability to adjust to new circumstances, advance personally, and discover fresh chances for fulfillment and success. Fighting Darkness with light entails overcoming of all the negative thoughts with positive thoughts and striving for achieving common good for all.</p>  
                        <p>In conclusion, while darkness can be frightening at first, it can also be a powerful teacher who can foster personal development and teach us priceless lessons. We can find new strength and resilience in the face of darkness by embracing the unknown, discovering your own light, appreciating the beauty of light, letting go of what is holding us back, and embracing change.</p>                  </div>


                </div>
                <div class="column2">
                    <div class="first">
                        <div class="title">
                            <span>Recent Posts</span>
                        </div>
                        <br />
                        <div class="sideimages">
                            <img src={require("../../assets/Img/Thumbnail.png")} alt="nghd" />                                </div>
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
                            <img src={require("../../assets/Img/aa.jpg")} alt="nghd" />
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
export default Darkness;

