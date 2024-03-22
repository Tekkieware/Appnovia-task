import Artists from "@/components/Artists";
import BlogBanner from "@/components/BlogBanner";
import BlogPosts from "@/components/BlogPosts";
import Brands from "@/components/Brands";
import CollectionAd from "@/components/CollectionAd";
import Hero from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import NewsletterBanner from "@/components/NewsletterBanner";
import Products from "@/components/Products";
import Socials from "@/components/Socials";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";



export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <p className="home_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod,<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
   <Products />
   <CollectionAd />
   <Testimonials />
   <Brands />
   <BlogBanner />
   <BlogPosts />
   <NewsletterBanner />
   <Artists />
   <Socials />
   </>
  );
}
