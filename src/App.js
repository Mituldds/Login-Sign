import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import DashBoard from "./Dashboard/DashBoard";
import Navbar from "./Navbar/Navbar";
import Home from "./Navbar/Home";
import Accessorise from "./Navbar/Accessorise";
import Services from "./Navbar/Services";
import Contact from "./Navbar/Contact";
import About from "./Navbar/About";
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/navbar" element={<Navbar />} />

        <Route path="/home" element={<Home />} />
        <Route path="/accessorise" element={<Accessorise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
