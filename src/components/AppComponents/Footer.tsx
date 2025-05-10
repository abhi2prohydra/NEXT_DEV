
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <div className="grid bg-green-100/30 md:grid-cols-2 grid-cols-1 lg:grid-cols-4  md:text-center">

        <div className="navigations p-5 ">
            <h1 className="text-xl text-green-500 font-semibold ">Navigations </h1>
            <div className="links mt-5 flex  flex-col gap-5">
         
            <Link className="font-semibold" href="/">Home</Link>
          
         
            <Link className="font-semibold" href="/about">About</Link>
        
         
            {/* <Link className="font-semibold" href="/contact">Contact</Link> */}
          
         
            {/* <Link className="font-semibold" href="/services">Services</Link> */}
          
         
            <Link className="font-semibold" href="/portfolio">Portfolio</Link>
         
          </div>
        </div>

        <div className="contact-info p-5">
            <h1 className="text-xl text-green-500 font-semibold ">Contact Information</h1>
            <div className="flex flex-col gap-5 mt-5">
                <Link href='mailto:nky_abhi@aol.com' className="font-semibold" >Email : <span className="tracking-widest  font-light">nky_abhi@aol.com </span></Link>
                <Link href='tel:+919565667918' className="font-semibold">Mobile : <span className="tracking-widest  font-light">+91 9565667918</span></Link>
                <p className="font-semibold">Location : <span className="tracking-widest  font-light">Chunar, Mirzapur UP </span></p>
            </div>
        </div>

        <div className="social-media-links p-5 ">
            <h1 className="text-xl text-green-500 font-semibold ">Socialmedia Links </h1>
            <div className="links mt-5 flex  flex-col md:items-center gap-5">
         
            <Link className="font-semibold text-3xl " target="_blank" href="https://www.github.com/abhi2prohydra"><FaGithub/></Link>
         
         
            <Link className="font-semibold text-3xl " target="_blank" href="https://www.linkedin.com/in/abhishek-singh-b6351328b/"><FaLinkedin/></Link>
          
         
            <Link className="font-semibold text-3xl " target="_blank" href="https://www.instagram.com/abhi_2_pro_hydra_nikky/"><RiInstagramFill></RiInstagramFill></Link>
         
         
         
          </div>
        </div>

        <div className="social-media-links p-5 ">
            <h1 className="text-xl text-green-500 font-semibold "> Branding & Copyright </h1>
            <div className="links mt-5 flex  flex-col gap-5">
         {/* <img src="/abnk.jpeg" className="w-[50%]" alt="" /> */}
         <h3 className="font-semibold">Designed & Developed by "ABHISHEK SINGH"</h3>
         <h3>© 2025 Abhishek Singh. All Rights Reserved.</h3>
          </div>
        </div>

      </div>
    </>
  );
}
