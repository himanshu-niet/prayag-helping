import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <div className="bg-secondary text-white p-5 ">
      <div className="md:p-10 lg:px-20 lg:py-15 grid md:grid-cols-2 lg:grid-cols-3  grid-cols-2">
        <div className="mt-8 col-span-2 md:col-span-1">
          <div className="flex">
            <img className="h-10 mr-3" src="/logo.png" alt="site logo" />
            <h2 className="md:text-2xl text-2xl sm:text-xl mt-2 md:mt-0 font-semibold text-white">
              PHF NGO
            </h2>
          </div>
          <div className="">
            <p className="text-sm  w-[90%] my-5 mx-auto">
              Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Conse ctetur pisicin elit, sed do eiusmod tempor.
            </p>
            <div className="truncate mt-3 text-2xl flex">
              <div className="mx-auto">
                <a
                  href="https://www.youtube.com/@prayag_helping_foundation."
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-youtube mr-6 hover:animate-pulse"></i>
                </a>
                <a
                  href="https://www.instagram.com/prayaghelpingfoundation/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram mr-6 hover:animate-pulse"></i>
                </a>
                <a
                  href="https://www.facebook.com/prayaghelpingfoundations/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook mr-6 hover:animate-pulse"></i>
                </a>
                <i className="fa fa-twitter mr-6  hover:animate-pulse"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex content-center">
          <div className="mx-auto">
            <h1 className="text-xl font-bold">Navigation</h1>
            <ul className="mt-2 items-center ">
              <li className="mt-1">
                <Link className="text-white hover:text-primary " to="/">
                  Home
                </Link>
              </li>
              <li className="mt-1">
                <Link className="text-white hover:text-primary " to="/about">
                  About
                </Link>
              </li>
              <li className="mt-1">
                <Link className="text-white hover:text-primary " to="/contact">
                  Contact
                </Link>
              </li>
              <li className="mt-1">
                <Link className="text-white hover:text-primary " to="/blogs">
                  Blog
                </Link>
              </li>

              <li className="mt-1">
                <Link
                  className="text-white hover:text-primary "
                  to="/volunteer"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-xl font-bold">Address</h1>
          <ul className="mt-2 items-center ">
            <li className="mt-1 text-white ">
              <a
                href="https://goo.gl/maps/Vdn8uMzrdjMw2sXQA"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-map-marker mr-2 text-xl hover:animate-pulse"></i>
                Civil Lines , Prayagraj,
              </a>
            </li>

            <li className=" text-white md:ml-5"> Uttar Pradesh, India</li>
            <li className=" text-white truncate mt-1">
              <i className="fa fa-envelope mr-2 text-xl hover:animate-pulse"></i>

              <a
                href="mailto:prayaghelpingfoundation@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                prayaghelpingfoundation@gmail.com
              </a>
            </li>
            <li className=" text-white truncate mt-1">
              <i className="fa fa-whatsapp mr-2 text-xl hover:animate-pulse"></i>
              <a
                href="https://wa.me/7525978743"
                target="_blank"
                rel="noreferrer"
              >
                +91 7525978743
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-100">
        Copyright ©2020 All rights reserved | This website is made by
        <i className="font-bold"> Himanshu</i>
      </div>
    </div>
  );
}

export default Footer