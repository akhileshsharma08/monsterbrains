import React, { useRef, Suspense } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Video from "../img/media/background.mp4";
import MyAudio from "../img/media/themesong.mp3";
import "../App.css";
import ManScreen from "./ManScreen";
import SmallBanner from "./SmallBanner";

const Hero = () => {
  // let song = new Audio(MyAudio);

  // song.play();

  return (
    <div className="text-white HeroContainer pb-12  ">
      <div className="videoCont relative flex justify-center">
        <video
          src={Video}
          autoPlay
          loop
          muted
          id="video"
          className="video  heroBackground"
        />
        <div className="container absolute top-24 flex justify-center items-center mx-auto">
          <div className="textContainer  ">
            <div className="  md:w-1/2 w-full ">
              <h1 className="text-6xl font-bold">
                {" "}
                Realise Your Creative Ideas{" "}
              </h1>
              <h4 className="my-4 text-semibold italic">
                We Build Epic. Raltime Interactive Experiences To Blow People's
                Minds.{" "}
              </h4>
            </div>
          </div>
            <div className="md:w-1/2 w-full ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero corporis fuga corrupti tenetur voluptatibus rerum excepturi ducimus qui, aut alias eaque vero. Incidunt nisi est consequuntur unde. Aliquid, modi maxime.
            </div>
      
        </div>
      </div>


      {/* <ManScreen /> */}
      <SmallBanner />
    </div>
  );
};

export default Hero;
