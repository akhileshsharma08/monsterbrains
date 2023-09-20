import React, { useState } from "react";

import Brain from "../img/brainLogo.png";
import "../App.css";
import ProjectList from "./ProjectList";

const About = () => {
  const [cursorX,setCursorX] = useState('')
  const [cursorY,setCursorY] = useState('')

  window.addEventListener('mouseenter',(e)=>{
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div className=" pt-24 text-white overflow-hidden">
      <div className="mycircle md:w-2/5 w-48 md:h-4/5 h-48 opacity-60 absolute md:-top-40 -top-10 right-2 bg-zinc-900 rounded-full"></div>
      <div className="title container mx-auto py-16 relative">
        <div className="mycursor absolute" style={{left:cursorX+ 'px', top:cursorY+ 'px'}}></div>
        <h1 className="text-6xl md:w-1/4 w-full font-bold">We are </h1>
        <h1 className="md:text-8xl text-6xl  font-bold">
          {" "}
          <span className=" text-green-500">MONSTER</span> <span>BRAINS</span>{" "}
        </h1>
      </div>
      <div className="objective container mx-auto px-8 flex justify-between items-center md:flex-row flex-col">
        <div className="md:w-1/2 w-full mb-4 flex justify-center">
          <div className="logoSection">
            <img
              src={Brain}
              width={300}
              height={300}
              alt="Monsterbrains Logo"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full mb-4">
          <h5 className="font-bold text-green-500">WHO WE ARE</h5>
          <p className="text-2xl  capitalize">
            MONSTERBRAINS is well diversed development focused tech agency
          </p>
          <p className="text-lg text-zinc-400 capitalize">
            Founded by dedicated technologist NITIN MOTWANI and SAMRAT GUPTA in
            2022. They Beleives that technology can empower people to realise
            their ideas and bring their imagination to live. <br />
            We deliver a wide range of IT services across various industries &
            continue to focus on developing innovative products, services, and
            solutions to assist our clients. We work closely with technology
            innovators and ensure that the team creates ‘Effective Software’
            based on a thorough understanding of underlying technologies.
          </p>
        </div>
      </div>
      {/* second container */}
      <div className="objective container mx-auto py-8 px-8 flex justify-between items-center md:flex-row-reverse flex-col">
        <div className="md:w-1/2 w-full mb-4 flex justify-center">
          <div className="logoSection">
            <img
              src={Brain}
              width={300}
              height={300}
              alt="Monsterbrains Logo"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full mb-4">
          <h5 className="font-bold text-green-500">WHAT WE DO </h5>
          <p className="text-lg text-zinc-400 capitalize">
            From creative to production, we collaborate with creative agencies
            and design studios to deliver compelling, real-time experiences,
            which go far beyond expectations.
          </p>
        </div>
      </div>
      {/* projects */}

      <ProjectList />
    </div>
  );
};

export default About;
