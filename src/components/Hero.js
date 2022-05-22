import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <div id="hero">
      {/* <img id='hero-background' src={list[0].src}/> */}

      <Header />

      <h1 id="header-text-first"> POAP </h1>
      <h1 id="header-text-second"> Customizer and Marketplace</h1>
      <h5 id="header-subtext">The one stop shop for Web3 Games in need of POAPs.</h5>
      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Customize
        </button>
      </div>
    </div>
  );
};

export default Hero;
