import React from "react";

import Hero from "./Hero";
import Teams from "./Teams";
import Testimonials from "./Testimonials";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className="pt-24 bg-black myMainContainer">
      <Hero />
      <About />
      <Work />
      <Teams />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
