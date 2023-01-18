import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = (props) => {
   const [isNav, setIsNav] = useState(true);

   function setNavbar() {
     setIsNav(!isNav);

     var elementStyle = document.getElementById("nav").style;
     if (isNav) {
       elementStyle.left = "0px";
     } else {
       elementStyle.left = "-300px";
     }
     elementStyle.transition = ".5s";
   }
  return (
    <div className="">
      <div
        id="nav"
        className="w-[300px] bg-[#303c54] h-screen fixed -left-[300px] top-[60px]  shadow-lg  z-10"
      >
        <h1 className="text-white font-semibold text-2xl  text-center my-3">
          Admin Panel
        </h1>
        <ul className="mt-10">
          <li className="text-xl text-white my-3 ml-4 ">
            <i className="fa fa-home mr-3"></i>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="text-xl text-white my-3 ml-4 ">
            <i className="fa fa-user mr-4"></i>
            <Link to="/admin/volunteer">Manage Volunteer</Link>
          </li>
          <li className="text-xl text-white my-3 ml-4 ">
            <i className="fa fa-newspaper-o mr-2"></i>
            <Link to="/admin/blog">Manage Blog</Link>
          </li>
          <li className="text-xl text-white my-3 ml-4 ">
            <i className='fa fa-heart mr-2'></i>
            <Link to="/admin/donation">Manage Donation</Link>
          </li>
        </ul>
      </div>

      <div className="fixed bg-white px-5 py-4 flex shadow-lg border-b-[1px] border-gray-400 w-full">
        <div className=" font-semibold text-xl flex w-full justify-between">
          <div className="flex ">
            <div
              className="  text-2xl  cursor-pointer"
              onClick={() => setNavbar()}
            >
              {isNav ? (
                <i className="fa fa-bars"></i>
              ) : (
                <i className="fa fa-times"></i>
              )}
            </div>
            <img className="h-7 mx-3" src="/logo.png" alt="site logo" />
            <h1>Dashboard</h1>
            {props.page ? (
              <div>
                <i className="fa fa-angle-right mt-1 mx-3"></i>
                <span className="font-normal">{props.page}</span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="px-3 relative">
            <i className="fa fa-bell-o"></i>
            <div className="absolute text-xs font-bold text-white px-[5px] shadow-lg -top-1 left-5 bg-[#303c54] rounded-full">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 export default AdminNavbar

