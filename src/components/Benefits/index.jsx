import React from "react";
import delivery from '../../assets/images/delivery.png';
import returns from '../../assets/images/returns.png';
import checkout from '../../assets/images/checkout.png';
import tracking from '../../assets/images/tracking.png';
import Image from 'next/image'

const benefits = [
  { title: "fast delivery", icon: delivery },
  { title: "free returns", icon: returns },
  { title: "secure checkout", icon: checkout  },
  { title: "order tracking", icon: tracking },
];
const Benefits = () => {
  return (
    <div className="benefits">
      {benefits.map((benefit, index) => {
        return (
          <div key={index} className="benefits_item">
            <div className="benefits_item-icon"><Image src={benefit.icon} alt={benefit.title} width={0} height={0} style={{width: "100%", height:"auto", objectFit:"cover"}} /></div>
            <div className="benefits_item-text">
              <p>{benefit.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Benefits;
