import React from "react";
import "./LifeStyle.scss";
import ing_wolv_logo from "../../assets/LifeStyle/ing-wolverhampton.png";
import volume_img from "../../assets/LifeStyle/volume.png";
import prev from "../../assets/LifeStyle/prev.png";
import next from "../../assets/LifeStyle/next.png";
import teaching from "../../assets/Images/teaching.png";
import assessment from "../../assets/Images/Assessment.png";
import buisness_exp from "../../assets/LifeStyle/b_exp.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useEffect, useLayoutEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider_css/slider.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { ScrollTrigger } from "gsap/all";
import slide_image_1 from "../LifeAtBic/imageSlider/images/slide-1.png";
import slide_image_2 from "../LifeAtBic/imageSlider/images/slide-2.png";
import slide_image_3 from "../LifeAtBic/imageSlider/images/slide-3.png";
import gsap from "gsap";
import { useState } from "react";
import Slideshow from "../Admission/Slideshow/Slideshow";
import Footer from "../Footer/Footer";
gsap.registerPlugin(ScrollTrigger);

const LifeStyle = () => {
  const imageRef = useRef(null);
  const anotherRef = useRef(null);
  const anotherRef2 = useRef(null);
  const anotherRef3 = useRef(null);
  const anotherRef4 = useRef(null);
  const anotherRef5 = useRef(null);
  const anotherRef6 = useRef(null);
  const anotherRef7 = useRef(null);

  useLayoutEffect(() => {
    const el1 = imageRef.current;
    const el2 = anotherRef.current;
    const el3 = anotherRef2.current;
    const el4 = anotherRef3.current;
    const el5 = anotherRef4.current;
    const el6 = anotherRef5.current;
    const el7 = anotherRef6.current;
    const animation1 = gsap.fromTo(
      el1,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "linear",
      }
    );

    const animation2 = gsap.fromTo(
      el2,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "linear",
      }
    );

    const animation3 = gsap.fromTo(
      el3,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    const animation4 = gsap.fromTo(
      el4,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    const animation5 = gsap.fromTo(
      el5,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    const animation6 = gsap.fromTo(
      el6,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    const animation7 = gsap.fromTo(
      el7,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
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
    ScrollTrigger.create({
      trigger: el4,
      animation: animation4,
    });
    ScrollTrigger.create({
      trigger: el5,
      animation: animation5,
    });
    ScrollTrigger.create({
      trigger: el6,
      animation: animation6,
    });
    ScrollTrigger.create({
      trigger: el7,
      animation: animation7,
    });
  }, []);

  // useLayoutEffect(() => {
  //   const el1 = imageRef.current;
  //   // const el2 = anotherRef.current;
  //   // const el3 = anotherRef2.current;
  //   // const el4 = anotherRef3.current;
  //   // const el5 = anotherRef4.current;
  //   // const el6 = anotherRef5.current;
  //   // const el7 = anotherRef6.current;
  //   // const el8 = anotherRef7.current;

  // //   gsap.fromTo(
  // //     [el1],
  // //     { opacity: 0, y: 100 },
  // //     {
  // //       opacity: 1,
  // //       y: 0,
  // //       duration: 2,
  // //       ease: 'power2.inOut',
  // //       scrollTrigger: {
  // //         trigger: [el1],
  // //       },
  // //     }
  // //   );
  // // }, []);

  // // useLayoutEffect(() => {
  // //   const el2 = anotherRef.current;
  // //   gsap.fromTo(
  // //     [el2],
  // //     { opacity: 0, y: 100 },
  // //     {
  // //       opacity: 1,
  // //       y: 0,
  // //       duration: 2,
  // //       ease: 'power2.inOut',
  // //       scrollTrigger: {
  // //         trigger: [el2],
  // //       },
  // //     }
  // //   );
  // // }, []);

  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    if(slide==-200){
        setSlide(0)
    }
    else{
        setSlide(slide-100);
    }
}

const prevSlide = () => {
    if(slide == 0){
        setSlide(-200)
    }
    else{
        setSlide(slide+100);
    }
}
  return (
    <>
      <NavBar life='life-opt'/>
      <div className="top-container">
        <div className="top-first-partition">
          <Slideshow/>
          {/* <div className="top-container-first-wrapper">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              centeredSlidesBounds={1000}
              loop={true}
              // centerInsufficientSlides={true}
              slidesPerView={"auto"}
              autoplay={50}
              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".button-prev-lifestyle",
                prevEl: ".button-after-lifestyle",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <img
                  src={slide_image_1}
                  className="slide_lifestyle_img"
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_2}
                  className="slide_lifestyle_img"
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_3}
                  className="slide_lifestyle_img"
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_1}
                  className="slide_lifestyle_img"
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_2}
                  className="slide_lifestyle_img"
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_3}
                  className="slide_lifestyle_img"
                  alt="slide_image"
                />
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div> */}
        </div>
        <div className="top-second-partition">
          <div className="top-second-first">
            <h2>Biratnagar International College (BIC)</h2>
            <p>
              An educational institution offering undergraduate courses in
              Biratnagar, Nepal. It was established in 2013 A.D..
            </p>
            <div className="top-first-partition-image">
              <img src={ing_wolv_logo} />
            </div>
          </div>
          <div className="top-second-second">
            <h1>College</h1>
            <div>
              {/* <img src={volume_img} className="volume" alt="" /> */}
              <div className="slider-controller">
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <span></span>
            <p></p>
          </div>
        </div>
        <div className="second-teaching-lifestyle" ref={imageRef}>
          <div className="teaching-lifestyle-content">
            <h2>Teaching that takes you Forward</h2>
            <p>
              At Biratnagar International College, we adopt a unique learning
              approach called L-T-W (Lecture, Tutorial, and Workshop). Lectures
              provide detailed information, tutorials involve discussions and
              activities, and workshops offer practical implementation of
              knowledge.
            </p>
            <div className="teaching-lifestyle-buttons-area">
              <button className="teaching-lifestyle-button">Enquire Now</button>
              <div className="teaching-lifestyle-button" id="contact_us_btn">
                Enquire Now
              </div>
            </div>
          </div>
          <div className="second">
            <img src={teaching} alt="" />
          </div>
        </div>
        <div className="third-teaching-lifestyle" ref={anotherRef}>
          <img src={assessment} alt="" />
          <section className="third-teaching-content-section">
            <div className="third-teaching-content">
              <h2>Assessment </h2>
              <p>
                Students are assessed on a timely basis throughout their
                semester via various methods such as Assignments (Group and
                Individual), Written Examination, Class Test, Presentations
                (Group and Individual) and Projects (Group and Individual).
              </p>
            </div>
          </section>
        </div>
        <div className="fourth-content-wrapper" ref={anotherRef2}>
          <h3>15-Day Summer-Camp at The University of Wolverhampton, UK</h3>
          <div className="fourth-content-wrapper-circle">Summer Camp 2023</div>
          <section className="fourth-content-lifestyle">
            <div className="fourth-content-item1">
              <div className="fourth-content-layer"></div>
            </div>
            <div className="fourth-content-item2">
              <div className="fourth-content-layer"></div>
            </div>
            <div className="fourth-content-item3">
              <div className="fourth-content-layer"></div>
            </div>
            <div className="fourth-content-item4">
              <div className="fourth-content-layer"></div>
            </div>
            <div className="fourth-content-item5">
              <div className="fourth-content-layer"></div>
            </div>
            <div className="fourth-content-item6">
              <div className="fourth-content-layer"></div>
            </div>
          </section>
        </div>
        <div className="fifth-content-experience" ref={anotherRef3}>
          <h2>Business Experience in Thailand</h2>
          <div className="fifth-content-experience-card">
            {/* <img src={buisness_exp} alt="" /> */}
            <div className="fifth-content-experience-card-banner"></div>
            <div className="fifth-content-experience-card-content">
              <h2>Description</h2>
              <p>
                Students from{" "}
                <span className="lifestyle_biratnagar">Biratnagar</span>{" "}
                <span className="lifestyle_intr_cllg">
                  International College
                </span>{" "}
                will visit the University of the Thai Chamber of Commerce,
                Thailand, for workshops, training, and an international industry
                visit. They'll explore cross-border dynamics and infrastructure,
                engage with industrialists, and exchange business ideas and
                success stories.
              </p>
            </div>
          </div>
        </div>
        <div className="sixth-content-events" ref={anotherRef4}>
          <h1>Events</h1>
          <div className="sixth-content-events-cards">
            <section className="events-card" id="events-card-1">
              <div className="events-card-top" id="events-card-1-top"></div>
              <div className="events-card-bottom" id="events-card-1-bottom">
                <h2>Aspire</h2>
                <p>
                  Aspire is a five day event organized to foster the creative
                  entrepreneurial instincts among our students. In this event,
                  students participate in different activities – ultimately
                  promoting their creativity and skills.
                </p>
              </div>
            </section>
            <section className="events-card" id="events-card-2">
              <div className="events-card-top" id="events-card-2-top"></div>
              <div className="events-card-bottom" id="events-card-2-bottom">
                <h2>Leadership Camp</h2>
                <p>
                  Leadership Camp is a programme designed to enhance our
                  students leadership skills. Various activities are conducted
                  to foster their creativity and leadership instincts.
                </p>
              </div>
            </section>
            <section className="events-card" id="svents-card-3">
              <div className="events-card-top" id="events-card-3-top"></div>
              <div className="events-card-bottom" id="events-card-3-bottom">
                <h2>Job Fair</h2>
                <p>
                  The event connects students with reputable companies offering
                  job opportunities. Graduates participate to secure employment
                  before graduation.
                </p>
              </div>
            </section>
          </div>
          <section className="events-card-back-section">
            <div className="events-card-back"></div>
            <div className="events-card-back"></div>
            <div className="events-card-back"></div>
          </section>
        </div>
        <div className="seventh-content-sports" ref={anotherRef5}>
          <section className="seventh-content-sports-wrapper">
            <div className="seventh-content-sports-heading">
              <p>
                {" "}
                Sp <div className="ball_sports"></div> rts Week
              </p>{" "}
              <div class="ball_sports_hand"></div>
              <div class="ball_sports_shadow"></div>
            </div>
            <div className="seventh-content-sports-year">
              <p>
                2<div className="basket_sports"></div>23
              </p>
            </div>
            <div className="seventh-content-sports-card">
              <div className="seventh-content-sports-card-header"></div>
              <div className="seventh-content-sports-card-body">
                <h2>Sample Heading</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="background-photo-sports-seventh"></div>
          </section>
          <div className="seventh-content-sports-back"></div>
        </div>
        <div className="eight-content-sports-chess" ref={anotherRef6}>
          <div className="eight-content-sports-wrapper">
            <div className="eight-content-sports-image"></div>
            <div className="eight-content-sports-content">
              <h3>Chess</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className="eight-content-sports-chess-back"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LifeStyle;
