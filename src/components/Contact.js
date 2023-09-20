import React from "react";
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import {RxDotFilled} from 'react-icons/rx'
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import india from "./india.json";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

const Contact = () => {
  return (
    <div className="contact bg-black text-white pt-24 pb-12">
      <h1 className="text-center text-6xl mt-4 mb-2">Get in Touch.</h1>
      <div className="mycircle w-2/5 h-4/5 opacity-60 absolute -top-20 right-40 bg-zinc-900 rounded-full"></div>
      <div className="container   flex justify-around md:flex-row flex-col items-center mt-10">
        <div className="border-zinc-900 md:w-1/4 w-full mb-2  border-2 p-4 bg-gray-950">Email : test@test.com</div>
        <div className="border-zinc-900 md:w-1/4 w-full mb-2  border-2 p-4 bg-gray-950">contact : +91 886502352</div>
        <div className="border-zinc-900 md:w-1/4 w-full mb-2 border-2 p-4 bg-gray-950">Addrress : Arjun Nagar</div>
      </div>
      <div className="container  mx-auto flex md:flex-row flex-col justify-between items-center py-8">
        <div className="formSection md:w-1/2 mx-4 w-full text-green-500 bg-zinc-900 rounded-2xl py-6">
          <div className="form mx-4 px-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 my-2 text-lg w-full bg-transparent border-b-2 border-b-zinc-500 hover:border-green-500 outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-2 my-2 text-lg w-full bg-transparent border-b-2 border-b-green-500 outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="phone"
                placeholder="Enter Phone"
                className="p-2 my-2 text-lg w-full bg-transparent border-b-2 border-b-green-500 outline-none"
              />
            </div>
            <div className="w-full">
              <textarea
                type="text"
                placeholder="Your Message"
                className="p-2 my-2 text-lg w-full bg-transparent border-b-2 border-b-green-500 outline-none"
              ></textarea>
            </div>
            <div className="w-full flex justify-center items-center text-green-300 font-bold hover:text-green-600">
              <button className="text-lg py-2 px-4     ">
                Send
              </button>
             <span className=" hover:animate-bounce font-bold text-2xl"><HiOutlineArrowLongRight/></span> 
            </div>
          </div>
        </div>
        <div className="mapSection md:w-1/2 w-full  ">
          <div className="maparea  p-4 ">
            <ComposableMap
              width="900"
              style={{ width: "100%" }}
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [-78.0081, -27.1767, 0], // Adjust the rotation to center Agra
                scale: 1500,
              }}
            >
              {/* Use a proper GeoJSON data source for your map */}
              <Geographies
                geography={india} // Replace with your map data source
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              >
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              <Annotation
                subject={[79, 26]} // Center the annotation
                dx={-20}
                dy={-20}
                connectorProps={{
                  stroke: "#FF5533",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                }}
              >
                <text
                  x="-12"
                  textAnchor="end"
                  alignmentBaseline="middle"
                  fill="#F53"
                >
                  {"Agra"}
                </text>
              </Annotation>
            </ComposableMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
