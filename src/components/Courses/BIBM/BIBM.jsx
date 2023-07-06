import React, { useState } from 'react';
import "./BIBM.scss";
import NavBar from '../../NavBar/NavBar';
import Group from '../Group/Group';
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import Footer from '../../Footer/Footer';

const BIBM = () => {

    const imageRef = useRef(null);
    const anotherRef = useRef(null);
    const anotherRef2 = useRef(null);
    const anotherRef3 = useRef(null);
    const anotherRef4 = useRef(null);

    // useLayoutEffect(()=>{
    //     const el1 = imageRef.current;
    //     const el2 = anotherRef.current;
    //     const el3 = anotherRef2.current;
    //     const el4 = anotherRef3.current;
    //     const el5 = anotherRef4.current;
    //     const animation1 = gsap.fromTo(
    //         el1,
    //         { opacity: 0, y: 100 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: "linear",
    //         }
    //       );
      
    //       const animation2 = gsap.fromTo(
    //         el2,
    //         { opacity: 0, y: 100 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: "linear",
    //         }
    //       );
      
    //       const animation3 = gsap.fromTo(
    //         el3,
    //         { opacity: 0, y: 100 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: "power2.inOut",
    //         }
    //       );
      
    //       const animation4 = gsap.fromTo(
    //         el4,
    //         { opacity: 0, y: 100 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: "power2.inOut",
    //         }
    //       );

    //       const animation5 = gsap.fromTo(
    //         el5,
    //         { opacity: 0, y: 100 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: "power2.inOut",
    //         }
    //       );
    //       ScrollTrigger.create({
    //         trigger: el1,
    //         animation: animation1,
    //       });
      
    //       ScrollTrigger.create({
    //         trigger: el2,
    //         animation: animation2,
    //       });
      
    //       ScrollTrigger.create({
    //         trigger: el3,
    //         animation: animation3,
    //       });
    //       ScrollTrigger.create({
    //         trigger: el4,
    //         animation: animation4,
    //       });
    //       ScrollTrigger.create({
    //         trigger: el5,
    //         animation: animation5,
    //       });
    // },[]);
    const [activeYear, setActiveYear] = useState('Year 1');

    const handleButtonClick = (year) => {
        setActiveYear(year);
    };
    return (
        <>
        <NavBar courses='course-opt' bibm='bibm-opt'/>
            <div className="BIBM_Container" ref={imageRef}>
                <div className="BIBM_Photo">
                    <img src={require("../../../assets/BIBM/home-banner.png")} alt="Image" className="image" />
                </div>
            </div>
            <div className="BIBM_Heading">
                <p>BA (Hons) INTERNATIONAL HOSPITALITY MANAGEMENT</p>
            </div>

            <div className="about_BIBM" >
                <div className="contains_BIBM">
                    <div className="about_Images">
                        <img src={require("../../../assets/BIBM/Digital Business Management Intro.png")} alt="Image" className="BIBM_Image" />
                        <div className="frames">
                            <div className="Blue_BIBM"></div>
                            <div className="Green_BIBM"></div>
                        </div>
                    </div>
                    <div className="text-contents">
                        <h1>BIBM</h1>
                        <p>Bachelors in International Business Management is an interdisciplinary approach to global citizenship that will equip you with the knowledge and expertise to manage across the global framework. This course will train you in key areas of business by helping you develop your own understanding of complex notions in the international business environment, with digital literacy skills via the use of software employed by contemporary organizations. </p>
                    </div>
                </div>
            </div>

            <div className="BIBM_Module" >
                <h1> Module & Contents </h1>
                <p>Acquire a thorough comprehension of programming languages, information systems,
                    software and hardware technologies, and various other related topics.</p>
            </div>


            <div className="module_Slider" >
                <button
                    className={`sliderButton ${activeYear === 'Year 1' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 1')}
                >
                    Year 1
                </button>
                <button
                    className={`sliderButton ${activeYear === 'Year 2' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 2')}
                >
                    Year 2
                </button>
                <button
                    className={`sliderButton ${activeYear === 'Year 3' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 3')}
                >
                    Year 3
                </button>
                <button
                    className={`sliderButton ${activeYear === 'Year 4' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Year 4')}
                >
                    Year 4
                </button>
            </div>


            <div className="bibm-content" >
                {activeYear === 'Year 1' &&
                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img src={`${require('../../../assets/BIHM/Sa.webp')}`} alt="Image" />
                        </div>
                    </>
                }

                {activeYear === 'Year 2' &&
                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img src={`${require('../../../assets/BIHM/Sa.webp')}`} alt="Image" />
                        </div>

                    </>
                }

                {activeYear === 'Year 3' &&

                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img src={`${require('../../../assets/BIHM/Sa.webp')}`} alt="Image" />
                        </div>
                    </>
                }

                {activeYear === 'Year 4' &&
                    <>
                        <div className="DIV">
                            <div className="Contents_DIVISION1">
                                <p className="databaseText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5051NT</p>
                                    <p className="credits">Credits: 15</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION2">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5052NT</p>
                                    <p className="credits">Credits: 12</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION3">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5053NT</p>
                                    <p className="credits">Credits: 18</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION4">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5054NT</p>
                                    <p className="credits">Credits: 10</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>

                            <div className="Contents_DIVISION5">
                                <p className="divisionText">Database</p>
                                <div className="moduleInfo">
                                    <p className="moduleCode">Module Code: CC5055NT</p>
                                    <p className="credits">Credits: 16</p>
                                    <p className="moduleType">Type: Core</p>
                                </div>
                            </div>
                        </div>

                        <div className="div_Content_Images">
                            <img src={`${require('../../../assets/BIHM/Requirement.png')}`} alt="Image" />
                        </div>
                    </>
                }
            </div>
            <br />
            <br />

            <Group/>
            <Footer/>
        </> 
    );
};

export default BIBM;