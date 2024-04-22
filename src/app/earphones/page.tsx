"use client";

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return <div className="sm:space-y-[160px] space-y-16 overflow-hidden"></div>;
};

export default Home;
