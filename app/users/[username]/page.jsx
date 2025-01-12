"use client";
import { React, useState, useEffect } from "react";

// Next Js
import { useParams } from "next/navigation";
import Image from "next/image";

// Images
import loginImage from "@/public/loginImage.webp";

// Icons
import { AiFillMessage } from "react-icons/ai";
import { RiUserFollowFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

// Next Auth
import { useSession } from "next-auth/react";

const page = () => {
  const params = useParams();
  const { data: session, status } = useSession();

  if (status !== "authenticated" || !session) return null;

  return (
    <>
      <div style={{ height: `${window.innerHeight / 2}px`, width: `${window.innerWidth}px` }} className={`absolute top-0 left-0 bg-gradient-to-r from-[#202751] to-[#7bd2fe] overflow-hidden -z-10`}>
        {/* <Image src={loginImage} alt="Signup image" fill objectFit="cover" /> */}
      </div>

      {/* Main Container */}
      <div style={{ height: `${window.innerHeight / 1.5}px` }} className="flex flex-row justify-center items-center w-full mb-[100rem]">
        {/* Box on with the User information is displayed */}
        <main id="mainBox" className="flex flex-col justify-center items-center text-center gap-[2rem] bg-white text-neutral-500 h-fit w-[60%] p-[1rem] pb-[2rem] mt-[14rem] shadow-2xl rounded-2xl border-[1px]">
          {/* Header */}
          <div className="relative flex flex-row justify-between w-full">
            <button className="flex flex-row gap-1 justify-center items-center group">
              {session ? (
                <>
                  <IoShieldCheckmarkSharp className="size-5 text-[#3f4da8] group-hover:text-black transition duration-300" />
                  <span className="cursor-pointer">Privacy</span>
                </>
              ) : (
                <>
                  <AiFillMessage className="size-5 text-[#3f4da8] group-hover:text-black transition duration-300" />
                  <span className="cursor-pointer">Message</span>
                </>
              )}
            </button>

            <Image src={session.user.image} alt="Signup image" width={150} height={150} priority className={`absolute -top-[4rem] left-[42%] rounded-full shadow-xl object-cover`} />

            <button className="flex flex-row gap-1 justify-center items-center group">
              {session ? (
                <>
                  <FaUserEdit className="size-5 text-[#3f4da8] group-hover:text-black transition duration-300" />
                  <span className="cursor-pointer">Edit</span>
                </>
              ) : (
                <>
                  <RiUserFollowFill className="size-5 text-[#3f4da8] group-hover:text-black transition duration-300" />
                  <span className="cursor-pointer">Follow</span>
                </>
              )}
            </button>
          </div>

          {/* Basic Information */}
          <div className="flex flex-col gap-2 mt-[4rem]">
            <h1 className="text-6xl text-neutral-700">{session.user.name}</h1>

            <div className="flex flex-col">
              <p>{session.user.username}</p>
              <p>@{session.user.email}</p>
            </div>
          </div>

          {/* Occupation */}
          <div className="flex flex-col -gap-1">
            <h3 className="text-lg">Next.Js Developer</h3>
            <h3 className="text-lg">Islamabad, Pakistan</h3>
          </div>

          {/* Other Data */}
          <div className="flex flex-row justify-center gap-[2rem]">
            <div className="flex flex-col justify-center">
              <p className="text-neutral-700 text-2xl">65</p>
              <p className="text-sm">Followers</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-neutral-700 text-2xl">43</p>
              <p className="text-sm">Upvotes</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-neutral-700 text-2xl">21</p>
              <p className="text-sm">Downvotes</p>
            </div>
          </div>

          <button className="text-white bg-gradient-to-r from-[#3f4da8] to-[#4894ba] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white px-4 py-2 rounded-full transition duration-200 text-sm">Show more</button>
        </main>
      </div>
    </>
  );
};

export default page;
