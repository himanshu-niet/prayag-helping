import React from 'react'
import Blog from '../components/Blog';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Blogs = () => {
  return (
    <>
      <div className="font-manrope overflow-hidden">
        <Navbar />
        <main className="my-5 p-5">
          <h1 className="text-2xl text-center font-semibold text-secondary my-5">
            Prayag Helping Foundation Blogs
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-10 mt-10">
            <Blog />

            <Blog />
            <Blog />
            <Blog /><Blog/>

            <Blog/>

            <Blog/>

            <Blog/>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Blogs