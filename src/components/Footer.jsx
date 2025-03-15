import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className="bg-[#111]">
        <div className="flex flex-col max-w-5xl mx-auto py-10 px-4 gap-10">
          <section className="text-white flex flex-col md:flex-row gap-9 justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center text-xl">
                <img src="../logo.png" alt="company-logo" className="h-7 w-7" />
                <h1 className="font-Prompt">Communion</h1>
              </div>
              <p className="w-full lg:w-[500px] font-Rubik text-sm">
                Discover the power of connection with Communion. Uniting diverse
                communities through spirituality and innovation, we foster
                inclusivity, collaboration, and social cohesion for a better world.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-xl font-Prompt text-blue-500">Connect</h2>
              <ul className="flex gap-3 md:flex-col flex-row">
                <li>
                  <a href="https://www.linkedin.com/in/javed-akhtar-85012b2a3/" target="_blank">
                    <LinkedInIcon className="hover:text-blue-500" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/javedAkhtar1" target="_blank">
                    <GitHubIcon className="hover:text-blue-500" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/javed999_/" target="_blank">
                    <InstagramIcon className="hover:text-blue-500" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h3 className="text-xl font-Prompt text-blue-500">Contact</h3>
              <ul className="flex flex-col gap-3 text-left">
                <li>jved004@gmail.com</li>
                <li>8287529260</li>
              </ul>
            </div>
          </section>
          <div className="text-white border-t border-gray-700 py-8 flex flex-col md:flex-row justify-between items-center h-auto">
            <p className="text-sm text-gray-400 text-center md:text-left">
              Copyright &#169; 2024. All rights reserved to Communion
            </p>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Link to={"/privacypolicy"} className="hover:text-blue-500">
                Privacy Policy
              </Link>
              <Link to={"/termsandconditions"} className="hover:text-blue-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
