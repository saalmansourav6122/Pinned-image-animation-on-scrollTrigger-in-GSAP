import React from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
function App() {
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      rotate: 360,
    });
  });
  return (
    <>
      <div className="w-[250px] h-[250px] bg-amber-300"></div>
      <div className="w-[250px] h-[250px] bg-amber-300"></div>
      <div className="w-[250px] h-[250px] bg-amber-300"></div>
      <div className="w-[250px] h-[250px] bg-amber-300"></div>
    </>
  );
}

export default App;
