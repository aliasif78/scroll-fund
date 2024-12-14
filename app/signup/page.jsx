import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="flex flex-col">
            <main className="flex flex-col h-screen justify-center text-center -mt-[4rem] gap-[1rem] p-[6rem]">
                <h1 className="text-4xl font-bold">Donate or recieve donations?</h1>

                <div className="flex flex-row gap-[0.25rem] text-center justify-center">
                    <p className="text-lg">You can either sign up for a user account or register as a non-profit charity organization.</p>
                </div>

                <div className="flex flex-row gap-[1rem] mt-[1rem] justify-center items-center text-white font-semibold">
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">User</button>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Charity</button>
                </div>
            </main >

            <section className='flex flex-row w-full justify-center'>
                <div className="flex flex-col gap-[2rem] p-[2rem] w-fit justify-center items-center border-2 rounded-md shadow-md">
                    <h2 className='text-4xl font-semibold'>Sign Up</h2>

                    <form className='flex flex-col gap-[1.25rem] w-[20rem]'>
                        <input type="text" name="name" placeholder='Name' className='px-2 py-1 border-b-[2px] border-neutral-200' />
                        <input type="text" name="username" placeholder='Username' className='px-2 py-1 border-b-[2px] border-neutral-200' />
                        <input type="text" name="email" placeholder='Email' className='px-2 py-1 border-b-[2px] border-neutral-200' />
                        <input type="password" name="password" placeholder='Password' className='px-2 py-1 border-b-[2px] border-neutral-200' />
                        <input type="password" name="reenterpassword" placeholder='Re-enter Password' className='px-2 py-1 border-b-[2px] border-neutral-200' />
                    </form >

                    <div className="flex flex-col gap-[0.25rem]">
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Submit</button>

                        <div className="flex flex-row gap-2 text-sm text-neutral-600">
                            <span>Already have an account?</span>
                            <Link href={"/login"}>
                                <button className='text-cyan-600 underline'>Sign in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default page