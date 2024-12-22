"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Form from 'next/form'
import { toast } from 'react-toastify'

// Images
import signUpImage from '../../public/signUpImage.webp'

// Server actions
import { signUpSubmitHandler } from '@/actions/auth'

const page = () => {
    const [isUser, setIsUser] = useState(null)
    const [doPasswordsMismatch, setDoPasswordsMisatch] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        country: "",
        city: "",
        email: "",
        password: "",
        reenterpassword: ""
    })

    useEffect(() => {
        (formData.password !== formData.reenterpassword) ? setDoPasswordsMisatch(true) : setDoPasswordsMisatch(false)
    }, [formData.reenterpassword])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const buttonClickHandler = (type) => {
        type === "user" ? setIsUser(true) : setIsUser(false)
    };

    const formCloseHandler = () => {
        setIsUser(null)
    }

    return (
        <>
            {isUser === null && (
                <section className="flex flex-col h-[100vh] justify-center text-center -mt-[4rem] gap-[1rem] p-[6rem]">
                    <h1 className="text-4xl font-bold">Donate or recieve donations?</h1>

                    <div className="flex flex-row gap-[0.25rem] text-center justify-center">
                        <p className="text-lg">You can either sign up for a user account or register as a non-profit charity organization.</p>
                    </div>

                    <div className="flex flex-row gap-[1rem] mt-[1rem] justify-center items-center text-white font-semibold">
                        <button onClick={() => buttonClickHandler("user")} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">User</button>
                        <button onClick={() => buttonClickHandler("charity")} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Charity</button>
                    </div>
                </section >
            )}

            {isUser !== null && (
                <div id="formSection" className='flex flex-row w-full justify-center mt-[1rem]'>
                    <main className="flex flex-row w-fit border-2 shadow-lg rounded-lg">
                        <section className="flex flex-col gap-[2rem] p-[2rem] w-[20rem] justify-center items-center bg-white rounded-lg">
                            <h2 className='text-3xl font-semibold'>Sign Up</h2>

                            <Form action={signUpSubmitHandler} className='flex flex-col items-center gap-[1.25rem] w-full'>
                                <input required={true} onChange={handleChange} value={formData.name} type="text" name="name" placeholder='Name' className='px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-full' />

                                {isUser === true ? (
                                    <input required={true} onChange={handleChange} value={formData.username} type="text" name="username" placeholder='Username' className='px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-full' />
                                ) : (
                                    <div className="flex flex-row gap-2 w-full">
                                        <input required={true} onChange={handleChange} value={formData.country} type="text" name="country" placeholder='Country' className='px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-1/2' />
                                        <input required={true} onChange={handleChange} value={formData.city} type="text" name="city" placeholder='City' className='px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-1/2' />
                                    </div>
                                )}

                                <input required={true} onChange={handleChange} value={formData.email} type="text" name="email" placeholder='Email' className='px-2 py-1 border-b-[2px] focus:outline-none border-neutral-200 w-full' />
                                <input required={true} onChange={handleChange} value={formData.password} type="password" name="password" placeholder='Password' className={`px-2 py-1 border-b-[2px] focus:outline-none ${!doPasswordsMismatch ? "border-neutral-200" : "border-red-500"} w-full`} />
                                <input required={true} onChange={handleChange} value={formData.reenterpassword} type="password" name="reenterpassword" placeholder='Re-enter Password' className={`px-2 py-1 border-b-[2px] focus:outline-none ${!doPasswordsMismatch ? "border-neutral-200" : "border-red-500"} w-full`} />
                                
                                {doPasswordsMismatch && <p className="text-red-500 text-sm -mt-[0.5rem] -mb-[2rem]">Passwords do not match.</p>}

                                <button type="submit" disabled={doPasswordsMismatch} className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center w-[14rem] mt-[1.5rem] disabled:cursor-not-allowed`}>Submit</button>
                            </Form >

                            <div className="flex flex-col w-full justify-center items-center text-center gap-[0.25rem] -mt-[1rem]">
                                <button className="px-4 py-2 flex gap-2 rounded-lg text-black bg-white border-2 border-neutral-200 hover:shadow transition duration-150">
                                    <img className="w-6 h-6 cursor-pointer" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                                    Continue with Google
                                </button>

                                <div className="flex flex-row gap-2 justify-center text-center text-sm mt-2 text-neutral-600">
                                    <span>Already have an account?</span>

                                    <Link href={"/login"}>
                                        <button className='text-cyan-600 underline'>Sign in</button>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="relative flex-1 bg-cover bg-no-repeat rounded-r-lg shadow-lg">
                            <Image
                                src={signUpImage}
                                alt="Signup image"
                                width={562}
                                height={562}
                                className="object-cover rounded-r-md"
                            />

                            <button onClick={formCloseHandler} className="absolute top-[1rem] right-[2rem] text-white text-2xl">x</button>
                        </section>
                    </main>
                </div >
            )}
        </>
    )
}

export default page