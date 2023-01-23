import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./user/pages/HomePage";
import About from "./user/pages/About";
import AdminDashboard from "./admin/pages/AdminDashboard";
import NoPage from "./NoPage";
import Contact from "./user/pages/Contact";
import Volunteer from "./user/pages/Volunteer";
import Donate from "./user/pages/Donate";
import Login from "./admin/pages/Login";
import AdminVolunteer from "./admin/pages/AdminVolunteer";
import AdminBlog from "./admin/pages/AdminBlog";
import AdminDonation from "./admin/pages/AdminDonation";
import Blogs from "./user/pages/Blogs";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/volunteer" element={<Volunteer />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/blogs" element={<Blogs />} />

        {/* Admin Routes */}
        <Route exact path="/admin" element={<Login />} />
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin/volunteer" element={<AdminVolunteer />} />
        <Route exact path="/admin/blog" element={<AdminBlog />} />
        <Route exact path="/admin/donation" element={<AdminDonation />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
