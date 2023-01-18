import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const volunteer = () => {
  return (
    <div className="font-manrope overflow-hidden">
      <Navbar />
      <main>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mx-[10%] my-10 p-[5%] border border-1  shadow-lg">
          <h1 className="text-4xl text-center text-secondary font-semibold  pb-16 col-span-2">
            BECOME VOLUNTEER
          </h1>
          <div className="md:col-span-1 col-span-2 ">
            <input
              className="font-semibold  text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
              type="text"
              required
              placeholder="Enter Your Name"
            />
          </div>

          <div className="md:col-span-1 col-span-2">
            <input
              className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
              type="email"
              required
              placeholder="Enter Email"
            />
          </div>

          <div className="md:col-span-1 col-span-2">
            <input
              className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
              type="number"
              required
              placeholder="Enter Phone"
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <input
              className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
              type="date"
              required
              placeholder="Date of Birth"
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <h1 className='text-lg font-semibold'>Id Card</h1>
            <input
              className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
              type="file"
              required
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <h1 className='text-lg font-semibold'>Photo</h1>
            <input
              className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
              type="file"
            />
          </div>
          <div className="col-span-2">
            <textarea
              rows="4"
              required
              className="font-semibold text-secondary border border-1 border-gray-400 focus:outline-0 w-full p-3"
              placeholder="Write your Address here...."
            ></textarea>
          </div>
          <div>
            <button className=" bg-primary px-5 py-3  font-semibold text-white hover:bg-secondary duration-500">
              Submit Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default volunteer