import React from 'react'
import gallery1 from '../../assets/images/gallery1.png'
import gallery2 from '../../assets/images/gallery2.png'
import gallery3 from '../../assets/images/gallery3.png'
import gallery4 from '../../assets/images/gallery4.png'
import gallery5 from '../../assets/images/gallery1.png'
import Image from 'next/image'

const photos = [
    {title: "first photo", image: gallery1},
    {title: "second photo", image: gallery2},
    {title: "third photo", image: gallery3},
    {title: "fourth photo", image: gallery4},
    {title: "fifth photo", image: gallery5},
    {title: "sixth photo", image: gallery3},
    {title: "seventh photo", image: gallery1},
    {title: "eight photo", image: gallery5},
]
const Gallery = () => {
  return (
    <div className='gallery'>
        {photos.map((photo, index)=>{
            return <Image key={index} src={photo.image} width={0} height={0} alt={photo.title} style={{width:"100%", height: "auto" , objectFit: "cover"}} />
        })}
    </div>
  )
}

export default Gallery