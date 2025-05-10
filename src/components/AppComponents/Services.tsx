import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <>
    <main>
        <h4 className='font-semibold text-center  text-green-500'>MY SERVICES</h4>
        <h1 className='text-4xl text-center'>What I <span className='text-green-500'>do.</span></h1>
        <hr className='w-[100px] mx-auto border-t-4 rounded-2xl mb-7 mt-2  border-orange-500' />

        <div className="grid md:grid-cols-2 grid-cols-1  gap-10">
            <div className="col-span-1 text-center p-5">
            <Image src="/web.png" className='w-20 h-20 mx-auto'  alt="" />
            <p className='text-2xl font-bold'>Website Design</p> <br />
            <p className='text-justify tracking-widest'>Crafting modern, responsive, and high-performing websites tailored to your needs. From design to development, we build seamless digital experiences that leave a lasting impression!</p>
            </div>
          
            <div className="col-span-1 text-center p-5">
            <Image src="/ui.png" className='w-20 h-20 mx-auto'  alt="" />
            <p className='text-2xl font-bold'>UI & UX Design</p> <br />
            <p className='text-justify tracking-widest '>Creating intuitive and visually stunning designs that enhance user experience. We blend creativity with functionality to deliver seamless and engaging digital interactions!</p>
            </div>

            <div className="col-span-1 text-center p-5">
            <Image src="/webdev.png" className='w-20 h-20 mx-auto'  alt="" />
            <p className='text-2xl font-bold'>SEO Friendly</p> <br />
            <p className='text-justify tracking-widest'>Optimizing your website for higher rankings and better visibility. We ensure fast, responsive, and SEO-friendly designs to drive organic traffic and growth !</p>
            </div>

            <div className="col-span-1 text-center p-5">
            <Image src="/responsive.png" className='w-20 h-20 mx-auto'  alt="" />
            <p className='text-2xl font-bold'>Responsive Design</p> <br />
            <p className='text-justify tracking-widest'>Delivering seamless experiences across all devices with fully responsive designs. Your website will look and perform flawlessly on desktops, tablets, and mobiles!</p>
            </div>
        </div>
    </main>
    </>
  )
}
