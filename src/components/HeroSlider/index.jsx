import React from "react";
import Image from "next/image";
import hero from "../../assets/images/hero.png";
import { GrNext, GrPrevious } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_image">
        <Image className="hero_image-file" src={hero} fill alt="Logo" />
      </div>
      <div className="hero_overlay">
        <div className="hero_overlay-buttons">
            <div className="hero_overlay-buttons-prev"> <GrPrevious size={20} /></div>
            <div className="hero_overlay-buttons-next"> <GrNext size={20} /></div>
        </div>
        <div className="hero_overlay-content">
            <h1 className="hero_overlay-content_title">
            Mixed Textiles
            </h1>
            <p className="hero_overlay-content_text">
            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod.
            </p>
            <button className="hero_overlay-content_button">
            SHOP COLLECTION
            </button>
        </div>
        <div className="hero_overlay-line">
      </div>
      </div>

      
    </div>
  );
};

export default Hero;
