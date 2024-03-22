import React from 'react'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_item'>
        <Image src={logo} height={16} alt='logo' width={78} />
        <p className='footer_item-text'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        </p>
        </div>
        <div className='footer_item'>
            <p className='footer_item-title'>
            SUPPORT
            </p>
            <ul className='footer_item-list'>
                <li>Help & Contact Us</li>
                <li>Return & Refunds</li>
                <li>Online Stores</li>
                <li>Privacy Policy</li>
            </ul>
            
        </div>
        <div className='footer_item'>
        <p className='footer_item-title'>
            company
            </p>
            <ul className='footer_item-list'>
                <li className='footer_item-list_dummy'></li>
                <li className='footer_item-list_dummy'></li>
                <li className='footer_item-list_dummy'></li>
                <li className='footer_item-list_dummy'></li>
            </ul>
        </div>
        <div className='footer_item'>
        <p className='footer_item-title'>
            locations
            </p>
            <ul className='footer_item-list'>
                <li>Vienna, Hansalgasse, Austria</li>
                <li>Berlin, Buschallee, Germany</li>
                <li>The Piazza, London, UK</li>
            </ul>
        </div>
        <div className='footer_item'>
        <div className='footer_item-newsletter'>
            <div className='footer_item-newsletter_title'>
            Get The Latest News
            </div>
            <div className='footer_item-newsletter_input'>
           <input className='footer_item-newsletter_input-textbox' type='text' placeholder='Email address' />
           <IoIosArrowRoundForward className='footer_item-newsletter_input-arrow' size={40} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer