import React from 'react'
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export default function page() {
  return (
    <>
<main>
<div className="grid gap-10 lg:grid-cols-2 grid-cols-1">

<div className="left flex flex-col justify-center">
  <img className='w-full ' src="/about/coder2.png" alt="" />
</div>
<div className="right flex flex-col justify-center px-10  h-[70vh]">
<h1 className='text-3xl text-green-500 font-semibold  text-center '>About Me  </h1>
<hr className='w-15 border-t-2 border-orange-600 mx-auto mt-1' />
<p className='tracking-widest text-justify mt-5'>
Hello! I'm <b>Abhishek</b>, a passionate <b>MERN Stack Developer</b> with hands-on experience in building scalable web applications. Over the past 6 months, I’ve worked on real-world projects during my internship, enhancing my problem-solving skills and deepening my expertise in <b>MongoDB, Express.js, React, and Node.js.</b>
 <br />
I collaborated with developers to build and optimize full-stack applications, focusing on <b>clean code, API development, and responsive UI.</b> Always eager to learn, I strive to improve my skills and create seamless user experiences.
</p>
</div>

</div>
<hr className='border-t-2 border-orange-600 '/>
<div className=" p-5  ">
<h1 className='text-3xl text-green-500 font-semibold  text-center '>What I do  </h1>
<hr className='w-15 border-t-2 border-orange-600 mx-auto mt-1' />
<p className='tracking-widest text-justify  mt-2 mb-5' >I’m a MERN stack developer specializing in dynamic, scalable web apps with MongoDB, Express.js, React, and Node.js. With strong JavaScript expertise, I build high-performance solutions that enhance user experience.</p>
<h3 className='text-2xl font-bold mb-5'> <MdOutlineMiscellaneousServices className='inline text-green-500 '/> Key Areas of Expertise:</h3>

<div className="grid md:grid-cols-2 gap-20">
  <div className="one p-3">
    <img className='w-50 mx-auto' src="/about/uiux.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Frontend Development</h4>
    <p className='text-justify tracking-widest'>Crafting responsive, interactive, and intuitive UI/UX using React.js, Redux Toolkit, and Tailwind CSS.</p>
  </div>


  <div className="two p-3">
    <img className='w-50 mx-auto' src="/about/backend.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Backend Development</h4>
    <p className='text-justify tracking-widest'>Designing RESTful APIs and backend systems with Node.js, Express.js, and TypeORM.</p>
  </div>


  <div className="three p-3">
    <img className='w-50 mx-auto' src="/about/database.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Database Management</h4>
    <p className='text-justify tracking-widest'>Implementing robust database solutions using MongoDB, Mongoose, and MySQL.</p>
  </div>



  <div className="four p-3">
    <img className='w-50 mx-auto' src="/about/auth.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Authentication & Security</h4>
    <p className='text-justify tracking-widest'>Securing applications with JWT, NextAuth.js, and role-based access control (RBAC).</p>
  </div>



  <div className="five p-3">
    <img className='w-50 mx-auto' src="/about/seo.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Next.js & Performance Optimization</h4>
    <p className='text-justify tracking-widest'> Enhancing SEO, server-side rendering (SSR), and static site generation (SSG) with Next.js.</p>
  </div>



  <div className="six p-3">
    <img className='w-50 mx-auto' src="/about/socket.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Real-Time Applications</h4>
    <p className='text-justify tracking-widest'> Developing chat and notification systems with WebSockets and Socket.io.</p>
  </div>



  <div className="seven p-3">
    <img className='w-50 mx-auto' src="/about/shop.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>E-commerce & APIs</h4>
    <p className='text-justify tracking-widest'> Building scalable e-commerce platforms and integrating third-party APIs.</p>
  </div>


  <div className="seven p-3">
    <img className='w-50 mx-auto' src="/about/collaboration.png" alt="" />
    <h4 className='text-2xl font-semibold text-center'>Version Control & Collaboration</h4>
    <p className='text-justify tracking-widest'> Managing code efficiently with Git, GitHub, and Git workflows, ensuring smooth team collaboration and project tracking.</p>
  </div>


 
</div>
<hr className='border-t-2 border-orange-600 '/>
<p className='text-lg tracking-widest text-justify mt-10 ' style={{textShadow:"1px 1px 2px black"}}>I am passionate about writing clean, maintainable code and constantly improving my skills to stay ahead in the ever-evolving tech landscape.</p>


</div>
</main>

    </>
  )
}
