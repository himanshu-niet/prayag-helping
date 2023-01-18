import React from 'react'
import AddDonation from '../components/AddDonation';
import AdminNavbar from '../components/AdminNavbar';
const AdminDonation = () => {
  return (
    <div className="font-manrope  overflow-hidden">
      <AdminNavbar page="Manage Donation" />
      <div className="w-[100%]  mt-[80px]">
        <AddDonation />
      </div>
    </div>
  );
}

export default AdminDonation