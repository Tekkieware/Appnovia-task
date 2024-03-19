import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";

const Products = () => {
  return (
    <div className='products'>
        <div className='products_filter'>
            <div className='products_filer-left'>
                <span className='products_filter-left_item'>All Products</span>
                <span className='products_filter-left_item'>LifeStyle</span>
                <span className='products_filter-left_item'>Brand</span>
                <span className='products_filter-left_item'>OutWear</span>
            </div>
            <div className='products_filter-right'>
            <span className='products_filter-right_item'>filter  &nbsp; <MdOutlineExpandMore size={15} /></span>
                </div>
        </div>
        <div className='products_list'>

        </div>
    </div>
  )
}

export default Products