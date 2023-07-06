import React from "react";
import "./programmes.scss"
import NavBar from "../../NavBar/NavBar";
import Group from '../Group/Group';
import { useRef, useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useState } from "react";
import Footer from "../../Footer/Footer";
gsap.registerPlugin(ScrollTrigger);

const Programmes = () => {
  const imageRef = useRef(null);
  const anotherRef = useRef(null);
  const anotherRef2 = useRef(null);

  useLayoutEffect(() => {
    const el1 = imageRef.current;
    const el2 = anotherRef.current;
    const el3 = anotherRef2.current;
    const animation1 = gsap.fromTo(
      el1,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "linear",
      }
    );

    const animation2 = gsap.fromTo(
      el2,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "linear",
      }
    );

    const animation3 = gsap.fromTo(
      el3,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    ScrollTrigger.create({
      trigger: el1,
      animation: animation1,
    });

    ScrollTrigger.create({
      trigger: el2,
      animation: animation2,
    });

    ScrollTrigger.create({
      trigger: el3,
      animation: animation3,
    });

  }, []);

  return (
    <>
      <NavBar courses='course-opt' programs='programs-opt' />
      {/* Cover Photo with contains */}
      <div className="programmes" ref={imageRef}>
        <div className="Cover-Image">
          <img src={require("../../../assets/Programmes/life_at_BIC.jpg")} alt="Cover Image" />
          <div className="dim"></div>
          <div className="programmes_Content">
            <h1> Our Programmes </h1>
            <p>BIC provides comprehensive undergraduate programmes through BIBM and BIHM, offering diverse opportunities for academic and professional development.</p>

          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="programmes_Heading" ref={anotherRef}>
        <h1>Locate Your Ideal Field of Study</h1>
        <p>Beginning your college journey is a very personal and sacred experience that encompasses
          a wide range of events compounding towards your growth.</p>
      </div>

      {/* Courses Disturbution BIBM */}
      <div className="course_distrubution" ref={anotherRef2}>
        <img src={require("../../../assets/Programmes/hat.png")} alt="hat Image" className="hat hat1"/>
        <div className="card bibm-card">
          <p>BIBM</p>
          <div className="image">
            <img src={require("../../../assets/Programmes/Group.jpg")} alt="Cover Image" />
          </div>
        </div>

        <div className="card bihm-card">
          <div className="image">
            <img src={require("../../../assets/Programmes/life_at_BIC.jpg")} alt="Cover Image" />
          </div>
          <p>BIHM</p>
        </div>

        <img src={require("../../../assets/Programmes/hat.png")} alt="hat Image" className="hat hat2"/>
        {/* <div className="BIBM">
                    <div className="course_Name">
                        <p>BIBM</p>
                    </div>
                </div>
                <div className="Course_BIBM">
                    <img src={require("../../../assets/Programmes/Group.jpg")} alt="Cover Image" />
                </div> */}

        {/* Courses Disturbution BIHM */}
        {/* <div className="BIHM">
                    <div className="course_Names">
                        <p>BIHM</p>
                    </div>
                </div>
                <div className="Course_BIHM">
                    <img src={require("../../../assets/Programmes/life_at_BIC.jpg")} alt="Cover Image" />
                </div> */}
      </div>

      {/* Hat */}
      {/* <div className="hat">
                <img src={require("../../../assets/Programmes/hat.png")} alt="hat Image" />
            </div> */}

      <Group />
      <Footer />
    </>
  )
}

export default Programmes
