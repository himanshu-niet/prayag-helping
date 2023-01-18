import React from 'react'

const AddBlog = () => {
  return (
   
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-start-2 md:col-span-2 rounded shadow-lg bg-white mx-[5%] md:mx-0 p-3">
            <h1 className="text-center text-xl font-semibold my-3">Add New Blog</h1>
            <div>
              <input className='w-full border border-1 my-2 p-2' type="text" placeholder="Blog Title" />
            </div>
            <div>
              <input className='w-full border border-1 my-2 p-2' type="date" />
            </div>
            <div>
                <input className='w-full border border-1 my-2 p-2' type="file"/>
            </div>
            <div>
                <textarea className='w-full border border-1 my-2 p-2' rows="4" placeholder="Description"></textarea>
            </div>
            <button className='border border-primary px-3 py-2 text-secondary font-semibold hover:bg-primary hover:text-white duration-500'>Add Blog</button>
          </div>
        </div>
    
  )
}

export default AddBlog