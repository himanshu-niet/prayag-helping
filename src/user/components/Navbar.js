import React,{ useState } from "react";
import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

 const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    let Links = [
      { name: "HOME", link: "/" },
      { name: "ABOUT", link: "/about" },
      { name: "BLOG'S", link: "/blogs" },
      { name: "CONTACT", link: "/contact" },
  
      { name: "VOLUNTEER", link: "/volunteer" },
    ];

  return (
    <>
      <div className="py-2 md:px-10 px-3 text-white font-bold bg-primary hidden sm:block ">
        <div className="grid grid-cols-3">
          <div className="truncate">
            <i className="fa fa-whatsapp mr-2 text-xl hover:animate-pulse"></i>
            <a href="https://wa.me/7525978743" target="_blank" rel="noreferrer">
              +91 7525978743
            </a>
          </div>
          <div className="truncate">
            <a href="mailto:prayaghelpingfoundation@gmail.com">
              prayaghelpingfoundation@gmail.com
            </a>
          </div>
          <div className="truncate flex flex-row-reverse text-xl">
            <div>
              <a
                href="https://www.youtube.com/@prayag_helping_foundation."
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube mx-3 hover:animate-pulse"></i>
              </a>
              <a
                href="https://www.instagram.com/prayaghelpingfoundation/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram mx-3 hover:animate-pulse"></i>
              </a>
              <a
                href="https://www.facebook.com/prayaghelpingfoundations/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook mx-3 hover:animate-pulse"></i>
              </a>
              <i className="fa fa-twitter mx-3  hover:animate-pulse"></i>
            </div>
          </div>
        </div>
      </div>
      <nav className="w-full bg-white text-secondary shadow-lg ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="" className="flex">
                <img className="h-8 mr-3" src="/logo.png" alt="site logo" />
                <h2 className="md:text-2xl text-md sm:text-lg mt-1 md:mt-0 font-semibold text-secondary">
                  PRAYAG HELPING FOUNDATION
                </h2>
              </Link>
              <div className="md:hidden">
                <span
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <i className="fa fa-times"></i>
                  ) : (
                    <i className="fa fa-bars"></i>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0  md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="text-secondary hover:text-primary font-semibold"
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}

                <li className="text-center py-4 md:py-0">
                  <Link
                    to="/donate"
                    className="bg-primary hover:bg-secondary duration-500  md:px-4 md:py-2 px-10 py-3 text-white rounded-full font-semibold shadow-lg"
                  >
                    DONATE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </nav>
      <BackToTop/>
    </>
  );
}


export default Navbar;