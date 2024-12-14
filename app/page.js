import { AiFillSafetyCertificate, AiOutlineDollar } from "react-icons/ai";
import { TbCoinOff } from "react-icons/tb";
import { FaHandsHelping, FaRegArrowAltCircleUp } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col h-screen justify-center text-center -mt-[4rem] gap-[1rem] p-[6rem]">
        <h1 className="text-4xl font-bold">Welcome to Scroll Fund!</h1>

        <div className="flex flex-row gap-[0.25rem] text-center justify-center">
          <p className="text-lg">Get your posts upvoted & earn money to donate to</p>
          <span className="border-[1px] border-black px-2 rounded-md">authorized charities</span>
          <p className="text-lg -ml-0.5">.</p>
        </div>

        <div className="flex flex-row gap-[1rem] mt-[1rem] justify-center items-center text-white font-semibold">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </main>

      <div className="w-full h-[1px] bg-neutral-400"></div>

      <section className="flex flex-col py-[3rem] px-[5rem] gap-[3rem]">
        <h2 className="text-2xl font-bold text-center w-full">Help those in need</h2>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <AiFillSafetyCertificate />
            </span>

            <h3 className="font-semibold text-lg">Authentic Organizations</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Each registered charity is authorized by our team.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <TbCoinOff />
            </span>

            <h3 className="font-semibold text-lg">No Hidden Fees</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Transparent transaction details & no extra charges.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <FaHandsHelping />
            </span>

            <h3 className="font-semibold text-lg">Direct Help</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">100% of your donations are used to help the needy.</p>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-neutral-400"></div>

      <section className="flex flex-col py-[3rem] px-[5rem] gap-[3rem]">
        <h2 className="text-2xl font-bold text-center w-full">Post on your profile</h2>

        <div className="flex flex-row justify-center gap-[3rem]">
          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <FaRegArrowAltCircleUp />
            </span>

            <h3 className="font-semibold text-lg">Upvoting</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Upvote or downvote other people's posts by choice.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <AiOutlineDollar />
            </span>

            <h3 className="font-semibold text-lg">Earn Money</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Earn $1 for every 1,000 upvotes you get on your posts.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <HiOutlineDevicePhoneMobile />
            </span>

            <h3 className="font-semibold text-lg">Enjoy your feed</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Engage with other people's posts and view their profiles.</p>
          </div>
        </div>
      </section>
    </div>
  );
}