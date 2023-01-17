import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./user/pages/HomePage";
import About from "./user/pages/About";
import AdminDashboard from "./admin/AdminDashboard";
import NoPage from "./NoPage";
import Contact from "./user/pages/Contact";
import Volunteer from "./user/pages/Volunteer";
import Donate from "./user/pages/Donate";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/volunteer" element={<Volunteer />} />
        <Route exact path="/donate" element={<Donate />} />

        {/* Admin Routes */}
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
