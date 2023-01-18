import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
const AdminDashboard = () => {
  return (
    <div className="font-manrope overflow-hidden ">
      <AdminNavbar page="Home" />
      <div className=" w-[100%]  mt-[60px] py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg p-5 ">
            <h1 className="text-lg font-semibold text-center">
              Total Donation
            </h1>
          </div>

          <div className="bg-white shadow-lg p-5 ">
            <h1 className="text-lg font-semibold text-center">
              Total Volunteer
            </h1>
          </div>

          <div className="bg-white shadow-lg p-5 ">
            <h1 className="text-lg font-semibold text-center">Total Blog</h1>
          </div>

          <div className="bg-white shadow-lg p-5 ">
            <h1 className="text-lg font-semibold text-center">Total Blog</h1>
          </div>
          <div className="lg:col-span-4 sm:col-span-2 bg-white shadow-lg p-5 ">
            <h1 className="text-lg font-semibold text-center">Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;