import Link from 'next/link'
import React from 'react'

export default function Who() {
  return (
    <>
   


    <div className="grid min-h-screen lg:grid-cols-2 grid-cols-1  gap-4">
      <div className="col-span-1 h-[50vw] mt-5 lg:mt-0 w-full bg-center bg-contain bg-no-repeat bg-[url(/who.png)] ">                                                                      

      </div>
      <div className="col-span-1 p-10 lg:pt-30 ">
      <h1 className='text-3xl font-bold mb-5  text-green-500'>Who Am I ? </h1> 
    <h3 className='text-2xl font-semibold mb-5'>I&apos;m Abhishek Singh, a MERN Stack Developer. </h3>
    <p className='tracking-widest mb-5 text-justify'>Enthusiastic MERN Stack Developer with 6 months of internship experience. Skilled in creating interactive features with React and backend services using Node.js and Express.js. A collaborative team player looking to contribute to innovative projects.</p>

    <hr className='mb-5'/>
    <div className="grid grid-cols-2 gap-5">
      <div className="col-span-1">
        <h1 className='text-xl font-bold'>Name</h1>
        <p>Abhishek Singh</p>
      </div>
      <div className="col-span-1">
        <h1 className='text-xl font-bold'>Email</h1>
        <p>nky_abhi@aol.com</p>
      </div>
      <div className="col-span-1">
        <h1 className='text-xl font-bold'>From</h1>
        <p>Chunar, Mirzapur, UP</p>
      </div>
      <div className="col-span-1">
        <h1 className='text-xl font-bold'>Age</h1>
        <p>22</p>
      </div>
    </div>

    <button className="btn btn-soft mt-10 btn-accent">
              <Link href="/abhi.pdf" target='_blank' download={true}>Download Resume</Link>
            </button>
      </div>
      
    </div>
    </>
  )
}
