import React from "react";
import Navbar from "./Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useInView } from "react-intersection-observer";
import Hero from "./Hero";
import Footer from "./Footer";

function Home() {
  const { ref: imgRef1, inView: groupImageVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: imgRef2, inView: childImageVisible } = useInView({ 
    triggerOnce: true,
  });
  const { ref: imgRef3, inView: peopleImageVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 mt-[5.5rem] font-Lato items-center text-center">
        <h1 className="text-5xl font-semibold">Connecting Communities</h1>
        <p className="text-sm text-gray-500 font-Rubik">
          Bringing people of all faiths together through community support and
          events!
        </p>
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-5 py-5 px-4 max-w-5xl mx-auto font-Lato">
        <div className="flex flex-col gap-4 items-center md:items-start flex-1">
          <h1 className="text-5xl font-bold text-center md:text-left">
            Unite, Innovate, Connect, Inspires together
          </h1>
          <p className="text-gray-500 text-sm text-center md:text-left">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
          <button className="px-5 py-1 bg-black hover:bg-gray-800 text-white">
            Explore Events <ArrowForwardIcon />
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 flex-1 gap-6 p-3 h-[300px]">
        <img
            ref={imgRef1}
            className={`w-full h-full object-cover transform transition-all duration-1000 ease-out ${
              groupImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            src="../home-images/group.jpg"
            alt="group-of-people-image"
          />
          <img
            ref={imgRef2}
            className={`w-full h-full object-cover row-span-2 transform transition-all duration-1000 ease-out delay-100 ${
              childImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            src="../home-images/child.jpg"
            alt="child-image"
          />
          <img
            ref={imgRef3}
            className={`w-full h-full object-cover transform transition-all duration-1000 ease-out delay-200 ${
              peopleImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            src="../home-images/people.jpg"
            alt="people-together-image"
          />
        </div>
      </div>
      <Hero />
      <Footer />
    </>
  );
}

export default Home;
