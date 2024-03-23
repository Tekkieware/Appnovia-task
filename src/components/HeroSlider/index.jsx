"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import hero from "../../assets/images/hero.png";
import { GrNext, GrPrevious } from "react-icons/gr";

const slides = [
  {
    title: "Mixed Textiles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    title: "Second Slide",
    description:
      "consectetur adipiscing elit Lorem ipsum dolor sit amet, sed do eiusmod. - 2",
  },
  {
    title: "Third Slide",
    description:
      "Lorem consectetur adipiscing elit, ipsum dolor sit amet, sed do eiusmod. - 3",
  },
];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () =>{
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }else{
      setCurrentSlide(0)
    }
  }

  const handlePrev = () =>{
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }else{
      setCurrentSlide(2)
    }
  }

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      if (currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
      }else{
        setCurrentSlide(0)
      }
    }, 3000);

    return () => window.clearInterval(sliderTimer);
  }, [currentSlide]);

  return (
    <>
      {slides.map((slide, index) => {
        if (index === currentSlide) {
          return (
            <div key={index} className="hero">
              <div className="hero_image">
                <Image className="hero_image-file" src={hero} fill alt="Logo" />
              </div>
              <div className="hero_overlay">
                <div className="hero_overlay-content">
                  <h1 className="hero_overlay-content_title">
                    {slide.title} - {currentSlide}
                  </h1>
                  <p className="hero_overlay-content_text">
                    {slide.description}
                  </p>
                  <button className="hero_overlay-content_button">
                    SHOP COLLECTION
                  </button>
                </div>
                <div className="hero_overlay-line"></div>
              </div>
              <div className="hero_overlay-buttons">
                  <div className="hero_overlay-buttons-prev">
                    {" "}
                    <GrPrevious size={20} onClick={handlePrev} />
                  </div>
                  <div className="hero_overlay-buttons-next">
                    {" "}
                    <GrNext onClick={handleNext} size={20} />
                  </div>
                </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Hero;
