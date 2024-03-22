import React from 'react'
import Image from 'next/image'
import { IoMdClose } from "react-icons/io";
import boutique from '../../assets/images/boutique.png'
import O from '../../assets/images/O.png'
import mangentle from '../../assets/images/mangentle.png'
import flow from '../../assets/images/flow.png'
import ox from '../../assets/images/ox.png'


const brands =[
    {name: "boutique", image: boutique},
    {name: "O", image: O},
    {name: "mangentle", image: mangentle},
    {name: "flow", image: flow},
    {name: "ox", image: ox},
]
const Brands = () => {
  return (
    <div className='brands'>
        <div>
        <IoMdClose />
        </div>
        <div className='brands_images'>
        {brands.map((brand, index)=>{
            return <Image key={index} src={brand.image} alt={brand.name} />
        })}
        </div>
        </div>
  )
}

export default Brands