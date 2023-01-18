import React from 'react'
import blogIng from '../../assests/images/joining1.jpg'
const Blog = () => {
  return (
    <div className="bg-white  shadow-lg border border-2">
      <img className="w-full bg-cover h-96" src={blogIng} alt="blog" />
      
      <div className='p-5'>

        <h1 className="text-xl font-semibold my-5 ">
          Google inks pact for new 35-storey office
        </h1>
        <p className="mb-3">
          That dominion stars lights dominion divide years for fourth have don't
          stars is that he earth it first without heaven in place seed it second
          morning saying.
        </p>
        <p className='text-sm font-semibold'>Date:20/01/2023</p>
      </div>
    </div>
  );
}

export default Blog