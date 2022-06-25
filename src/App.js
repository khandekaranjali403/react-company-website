import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Team/>
      <Testimonial />
      <Subscription />
      <Footer/>

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </>
  );
};

export default App;
