import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Technologies from "./Technologies";
import Services from "./Services";
import Figures from "./Figures";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <Technologies />
      <Services />
      <Figures />
    </div>
  );
};

export default Home;
