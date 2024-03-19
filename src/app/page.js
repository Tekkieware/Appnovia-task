import Hero from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Image from "next/image";



export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <p className="home_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod,<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
   <Products />
   </>
  );
}
