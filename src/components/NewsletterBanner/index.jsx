import React from 'react'
import Image from 'next/image'
import newsletterbanner from '../../assets/images/newsletterbanner.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsletterBanner = () => {
  return (
    <div className='newsletterbanner'>
        <div className='newsletterbanner_image'>
           <Image src={newsletterbanner} height={0} width={0} alt='Newsletter' style={{width: "100%", height: "auto", objectFit: "cover"}} />
        </div>
        <div className='newsletterbanner_overlay'>
            <div className='newsletterbanner_overlay-title'>
            Sing up to our newsletter for all the <br />latest news & discounts.
            </div>
            <div className='newsletterbanner_overlay-input'>
           <input className='newsletterbanner_overlay-input_textbox' type='text' placeholder='Email address' />
           <IoIosArrowRoundForward className='newsletterbanner_overlay-input_arrow' size={40} />
            </div>
        </div>
    </div>
  )
}

export default NewsletterBanner