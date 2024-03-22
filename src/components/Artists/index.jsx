import React from 'react'
import Image from 'next/image'
import artist1 from '../../assets/images/artist1.png'
import artist2 from '../../assets/images/artist2.png'

const Artists = () => {
  return (
    <div className='artists'>
        <div className='artists_item'>
        <Image src={artist1} height={0} width={0} alt='artist' style={{width: "100%", height: "auto", objectFit: "cover"}} />
        </div>
        <div className='artists_item'>
        <Image src={artist2} height={0} width={0} alt='artist' style={{width: "100%", height: "auto", objectFit: "cover"}} />
        </div>
        <div className='artists_item'>
            <div className='artists_item-text'>
            <h1 className='artists_item-text_title'>
            Meet The artists Behind The Corsen Maria & Sophia
            </h1>
            <p className='artists_item-text_description'>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className='artists_item-text_button'>
                Shop collection
            </button>
            </div>
        </div>
    </div>
  )
}

export default Artists