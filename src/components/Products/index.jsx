import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import hat from "../../assets/images/black hat.png";
import blackJacket from "../../assets/images/black jacket.png";
import leatherJacket from "../../assets/images/leather jacket.png";
import balckOutfit from "../../assets/images/black outfit.png";
import tShirt from "../../assets/images/t-shirt.png";
import blackVest from "../../assets/images/black vest.png";
import biegeTshirt from "../../assets/images/BeigeTShirt.png";
import Image from "next/image";
import { BsBag } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";



const products = [
    { name: "black jacket", price: "$350.00", image: blackJacket, status: "new" },
    { name: "leaher jacket", price: "$300.00", image: leatherJacket, status: "" },
    { name: "black outfit", price: "$200.00 $180.00", image: balckOutfit, status: "sale" },
    { name: "t-shirt", price: "$120.00", image: tShirt, status: "" },
    { name: "black vest", price: "$85.00", image: blackVest, status: "" },
    { name: "otk boots", price: "$300.00", image: leatherJacket, status: "" },
    { name: "biege t-shirt", price: "$60.00", image: biegeTshirt, status: "sold" },
    { name: "black hat", price: "$45.00", image: hat, status: "" }
  ];


const Products = () => {


  return (
    <div className="products">
      <div className="products_filter">
        <div className="products_filter-left">
          <div className="products_filter-left_item">All Products</div>
          <div className="products_filter-left_item">LifeStyle</div>
          <div className="products_filter-left_item">Brand</div>
          <div className="products_filter-left_item">OutWear</div>
        </div>
        <div className="products_filter-right">
          <span className="products_filter-right_item">
            filter &nbsp; <MdOutlineExpandMore size={15} />
          </span>
        </div>
      </div>
      <div className="products_list">
        {products.map((product, index) => {

          return <div className="products_list-item" key={index}>
            <div className="products_list-item_image">
              <Image
                className="hero_image-file"
                src={product.image}
                height={478}
                alt="Logo"
              />
            </div>
            <div className="products_list-item_text">
              <div className="products_list-item_text-title">
                <p className="products_list-item_text-title_name">
                  {product.name}
                </p>
                <p className="products_list-item_text-title_price">{product.price}</p>
              </div>
              <div className="products_list-item_text-icon">
                <BsBag />
              </div>
            </div>
            <div className="products_list-item_overlay">
                <div>{product.status && <button className={product.status==="sold"? "products_list-item_overlay-button_sold" : "products_list-item_overlay-button_normal"}>{product.status}</button>}</div>
                <div className="products_list-item_overlay-icons">
                <span><CiBookmark size={20}/></span>
                <span><MdOutlineRemoveRedEye size={15} /></span>

                </div>
            </div>
          </div>;
        })}
      </div>
      
    </div>
  );
};

export default Products;
