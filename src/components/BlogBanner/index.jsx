import React from 'react'
import Image from 'next/image'
import blogbanner from '../../assets/images/blogbanner.png'

const BlogBanner = () => {
  return (
    <div className='blogbanner'>
        <Image src={blogbanner} alt='blog banner' height={0} width={0} style={{width: "100%", height: "auto", objectFit:"cover"}}/>
        <div className='blogbanner_overlay'>
        <p className='blogbanner_overlay-title'>
            ONYX x THE FLOW
        </p>
        <p className='blogbanner_overlay-link'>
            Read more
        </p>
        </div>
    </div>
  )
}

export default BlogBanner