"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import quote from "../../assets/images/quote.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const testimonials = [
  {text: "Accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."},
  {text: "Accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. - 2"},
  {text: "Accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. - 3"}
]
const Testimonials = () => {

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
    <div className="testimonials">
      <div className="testimonials_quote">
        <Image
          src={quote}
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
          alt="quote"
        />
      </div>
     {testimonials.map((testimonials, index)=>{
      if(currentSlide ===index){
        return  <div key={index} className="testimonials_text">
        <p>
         {testimonials.text}
        </p>
      </div>
      }
     })}
      <div className="testimonials_overlay">
        <div className="testimonials_overlay-prev">
          <GrPrevious onClick={handlePrev} size={20} />
        </div>
        <div className="testimonials_overlay-next">
          <GrNext onClick={handleNext} size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
