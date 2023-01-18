import React from 'react'
import AddBlog from '../components/AddBlog';
import AdminNavbar from '../components/AdminNavbar';
const AdminBlog = () => {
  return (
    <div className="font-manrope overflow-hidden">
      <AdminNavbar page="Manage Blog" />
      <div className=" h-full  w-[100%]  mt-[60px] py-5">

       <AddBlog/>

      </div>
    </div>
  );
}

export default AdminBlog