import React from "react";
import Image from "next/image";
import quote from "../../assets/images/quote.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Testimonials = () => {
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
      <div className="testimonials_text">
        <p>
          Accusantium doloremque laudantium, totam rem aperiam. Sed ut
          <br /> perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
      </div>
      <div className="testimonials_overlay">
        <div className="testimonials_overlay-prev">
          <GrPrevious size={20} />
        </div>
        <div className="testimonials_overlay-next">
          <GrNext size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
