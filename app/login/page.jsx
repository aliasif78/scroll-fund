"use client";

// React
import React from "react";
import { useState, useEffect } from "react";

// Next Js
import Link from "next/link";
import Image from "next/image";
import Form from "next/form";

// Images
import loginImage from "../../public/loginImage.webp";

// Server actions
import { loginSubmitHandler } from "@/actions/auth";

// Dependancies
import { useSession, signIn, signOut } from "next-auth/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const page = () => {
  const { data: session } = useSession();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isUser, setIsUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const buttonClickHandler = (type) => {
    type === "user" ? setIsUser(true) : setIsUser(false);
  };

  const formCloseHandler = () => {
    setIsUser(null);

    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) return;

    // Function can be given any string parameter
    const token = await executeRecaptcha("login");
    console.log("RECAPTCHA TOKEN: ", token);

    // Send this token to the server for verification
    // If the token is valid, the server will continue with the login process
    const response = await fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (data.success) console.log("RECAPTCHA SUCCESS: ", data);
    else console.log("RECAPTCHA FAILED: ", data);
  };

  return (
    <>
      {isUser === null && (
        <section className="flex flex-col h-[100vh] justify-center text-center -mt-[4rem] gap-[1rem] p-[6rem]">
          <h1 className="text-4xl font-bold">User or a Charity Organization?</h1>

          <div className="flex flex-row gap-[0.25rem] text-center justify-center">
            <p className="text-lg">You can either login with a user account or as a non-profit charity organization.</p>
          </div>

          <div className="flex flex-row gap-[1rem] mt-[1rem] justify-center items-center text-white font-semibold">
            <button onClick={() => buttonClickHandler("user")} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
              User
            </button>

            <button onClick={() => buttonClickHandler("charity")} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
              Charity
            </button>
          </div>
        </section>
      )}

      {isUser !== null && (
        <div id="formSection" className="flex flex-row w-full justify-center mt-[2rem]">
          <main className="flex flex-row w-fit border-[1px] shadow-2xl rounded-lg">
            <section className="flex flex-col gap-[2rem] p-[2rem] w-[20rem] justify-center items-center bg-white rounded-lg">
              <h2 className="text-3xl font-semibold">Welcome Back</h2>

              <Form onSubmit={handleSubmit} className="flex flex-col items-center gap-[1.25rem] w-full">
                <input required={true} onChange={handleChange} value={formData.email} type="text" name="email" placeholder="Email" className="px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-full" />
                <input required={true} onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Password" className={`px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-full`} />

                <button type="submit" className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center w-[14rem] mt-[1.5rem] disabled:cursor-not-allowed`}>
                  Submit
                </button>
              </Form>

              <div className="flex flex-row gap-2 justify-center text-center text-sm text-neutral-600 -mt-[1rem]">
                <span>Don't have an account?</span>

                <Link href={"/signup"}>
                  <button className="text-cyan-600 hover:underline">Sign Up</button>
                </Link>
              </div>

              <div className="flex flex-row w-full text-center justify-between text-neutral-500 text-xs items-center">
                <div className="h-[1px] w-full bg-neutral-400"></div>
                <div className="px-[0.5rem]">OR</div>
                <div className="h-[1px] w-full bg-neutral-400"></div>
              </div>

              <button onClick={() => signIn("github")} className="px-4 py-2 flex justify-center items-center text-center rounded-lg text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border-2 border-neutral-200 hover:shadow transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
                Continue with GitHub
              </button>
            </section>

            <section className="relative flex-1 bg-cover bg-no-repeat rounded-r-lg">
              <Image src={loginImage} alt="Signup image" width={562} height={562} className="object-cover rounded-r-md" />

              <button onClick={formCloseHandler} className="absolute top-[1rem] right-[2rem] text-white text-2xl">
                x
              </button>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default page;
