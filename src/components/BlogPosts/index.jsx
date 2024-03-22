import React from "react";
import Image from "next/image";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const posts = [
    {title: "Top 10 Winter Essentials For 2022 You Should Try", image: blog1},
    {title: "The Complete Communication Skills Master Class For Work", image: blog2},
    {title: "Premium Consultant Course For You", image: blog3},
]
const BlogPosts = () => {
  return (
    <div className="blogposts">
      <div className="blogposts_title">Read Our Blog Posts</div>
      <div className="blogposts_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed do
        eiusmod.
      </div>
      <div className="blogposts_items">
       {posts.map((post, index)=>{
        return <div key={index} className="blogposts_items-item">
        <div className="blogposts_items-item_image">
          <Image
            src={post.image}
            alt="blog1"
            height={0}
            width={0}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="blogposts_items-item_tags">fashion &nbsp; <b className="blogposts_items-item_tags-seperator">.</b> &nbsp; inspiration</div>
        <div className="blogposts_items-item_title">
          {post.title}
        </div>
        <div className="blogposts_items-item_link">read more</div>
        <div className="blogposts_items-item_overlay"><button className="blogposts_items-item_overlay-button">September 29, 2022</button></div>
      </div>
       })}
      </div>
    </div>
  );
};

export default BlogPosts;
