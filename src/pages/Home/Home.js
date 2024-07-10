import React from "react";
import Hero from "../../components/Hero/Hero"
import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";
import About from "../../components/About/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
};
export default Home;
