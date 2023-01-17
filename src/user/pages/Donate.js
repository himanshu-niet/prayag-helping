import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UPIImage from '../../assests/images/prayaghelping.jpeg'

const Donate = () => {
  return (
    <div className="font-manrope overflow-hidden">
      <Navbar />
      <main className="px-[10%] mb-10">
        <h1 className="text-4xl text-center text-secondary font-semibold  py-16 ">
          DONATE HERE
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="text-lg font-bold mb-4">Bank Details</h1>
            <div>
           
              <h1 className='text-md font-semibold my-1'>Bank Name:</h1>
              <h1 className='text-md font-semibold my-1'> Account Holder: </h1>
              <h1 className='text-md font-semibold my-1'>Account No:</h1>
              <h1 className='text-md font-semibold my-1'> IFSC Code:</h1>
              <h1 className='text-md font-semibold my-1'> A/C Type: </h1>
              <h1 className='text-md font-semibold my-1'> Branch: </h1>
            </div>
          </div>
          <div>
            <img
              className="mx-10 px-20 w-[100%]"
              src={UPIImage}
              alt="prayaghelping"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Donate