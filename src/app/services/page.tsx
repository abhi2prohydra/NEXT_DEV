"use client"
import Image from 'next/image';
import { Typewriter } from 'nextjs-simple-typewriter';
import React from 'react'
import { BsStack } from "react-icons/bs";
export default function page() {
  return (
    <>
    <div className="grid lg:grid-cols-2 gap-20 p-3">
      <Image className='w-[80%] md:w-[60%] lg:w-[70%] mx-auto' src="/services/start.png"  alt="" />

      <div className="flex justify-center flex-col p-10">
<h1 className='text-3xl font-bold text-center text-green-500'>What I Do</h1>
<hr className='border-t-2 mt-1 border-orange-600 w-20 mx-auto'/>
<p className='tracking-widest text-justify mt-3 '>I offer <b>end-to-end</b> web development services, specializing in <b>MERN stack</b> and modern <b>web technologies</b> to build <b>fast, secure,</b> and <b>scalable</b> applications. Whether you need a custom <b>web solution,</b> an <b>e-commerce platform,</b> or an <b>API-driven backend</b>, I ensure high-quality, performance-optimized results.</p>

      </div>

    </div>
    <hr className='border-t-2 border-orange-600 '/>



    <h1 className='text-3xl font-bold text-center text-green-500 mt-5'>Services I Offer</h1>
<hr className='border-t-2 mt-1 border-orange-600 w-20 mx-auto'/>
<h1 className='text-xl pl-5 mt-5 mb-5 font-semibold '><BsStack className='inline mr-2'/> <Typewriter  words={['Full-Stack Web Development','MERN Stack Development']}  cursorBlinking={true} cursor={true} cursorColor='red' cursorStyle='</>' loop={0}/></h1>

    <div className="grid lg:grid-cols-2 p-3">
      <div className="">

      </div>

    </div>
    </>
  )
}
