import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HeroCard({ title, about, Icon }) {
    const truncatedAbout = about.split(" ").slice(0, 10).join(" ") + (about.split(" ").length > 10 ? "..." : "");
  return (
    <div className="lg:w-[800px] flex flex-col gap-3 bg-[#222] p-5 h-auto rounded-2xl">
      <h1>{<Icon />}</h1>
      <h2 className="text-lg font-Rubik leading-6 text-gray-500">{title}</h2>
      <p>{truncatedAbout}</p>
      <button className="bg-gray-200 text-black px-4 py-1 font-Lato rounded-full border border-black hover:text-white hover:bg-black">
        Learn More <ArrowForwardIcon />
      </button>
    </div>
  );
}

export default HeroCard;
