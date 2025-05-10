import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="lg:grid grid-cols-1 flex flex-col-reverse min-h-screen lg:grid-cols-2">
        <div className="col-span-1">
          <div className="outer  mt-10 ml-10 md:mt-20 md:ml-25 break-words ">
            <p className="text-2xl mb-2">Hi there !</p>
            <h1 className="text-4xl font-bold">
              I am a{" "}
              <Typewriter
                words={[
                  "Developer.",
                  "MERN Stack Developer.",
                  "Full Stack Developer.",
                  "Web Developer.",
                ]}
                cursorStyle="_"
                cursorColor="red"
                cursor={true}
                loop={0}
              />
            </h1>
            <h3 className="text-2xl mt-3 mb-10">I make the complex simple. </h3>
            <button className="btn btn-soft btn-accent">
              <Link href="/contact">Contact me</Link>
            </button>
          </div>
          <div className="w-[10] lg:mx-[-2vw] lg:mt-[2vw] mb-5 flex">
            <Image className="object-cover w-[20vw]" src="/react.png" alt="" />
            <Image className="object-cover w-[20vw]" src="/next.png" alt="" />
          </div>
          <div className="grid grid-cols-2  gap-5 md:grid-cols-3">
            <div className="col-span-1 p-7">
              <p className="text-2xl font-bold flex items-center gap-2">
                <span className="text-green-400 ">
                  <MdMarkEmailUnread />
                </span>{" "}
                Email
              </p>
              <Link href="mailto:nky_abhi@aol.com">nky_abhi@aol.com</Link>
            </div>
            <div className="col-span-1 p-7">
              <p className="text-2xl font-bold flex items-center gap-2">
                <span className="text-green-400 ">
                  <MdPhoneInTalk />
                </span>{" "}
                Phone
              </p>
              <Link href="tel:+919565667918">+91 9565667918</Link>
            </div>
            <div className="col-span-1  lg:px-2 p-7">
              <p className="text-2xl font-bold flex items-center gap-2">
                <span className="text-green-400 ">
                  <FaLocationArrow />
                </span>{" "}
                Location
              </p>
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/VDG6FhNuLvzKAFfx5"
              >
                {" "}
                Lucknow || Mirzapur{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-center h-[50vw]   bg-contain bg-no-repeat w-full bg-[url(/developer.png)]"></div>
      </div>
    </>
  );
}
