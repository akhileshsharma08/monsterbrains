import React, { useState } from "react";
import SingleProject from "./SingleProject";
import ProductModal from "./ProductModal";
import mkite from '../img/works/mkite.png'
import edgocart from '../img/works/edgocart.png'

const projects = [
  {
    title: "Mkite",
    src: mkite,
    color: "#000000",
    category:"medical"
  },
  {
    title: "Edgocart",
    src: edgocart,
    color: "#8C8C8C",
    category:"transport"

  },
  {
    title: "Leafers",
    src: "https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg",
    color: "#EFE8D3",
    category:"ecommerce"

  },
];

const ProjectList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto py-8 px-8 relative overflow-hidden -mt-12">
        <div className="mycircle md:w-1/3 w-32 md:h-2/4 h-32 absolute opacity-60  md:-top-28 -top-2/3 right-1 bg-zinc-900 rounded-full"></div>
        <h1 className="text-2xl font-bold text-green-500">PROJECTS</h1>
        <h1 className="w-3/4 md:text-8xl text-6xl capitalize  About_title">
          {" "}
          Crafted With Dedication And Love{" "}
        </h1>
        <div className=" container mx-auto my-2 flex justify-end  ">
          <div className=" md:w-1/3 w-full">
            <p className="text-lg text-zinc-900">
              we love what we do and combine our expert knowledge with
              enthusiasm to go above and beyond for our clients. Check out some
              of our best work.
            </p>
          </div>
        </div>

        <ul className="text-5xl my-6">
          {projects.map((ele, index) => {
            return (
              <div>
                {/* <li className="my-4 font-semibold stroke-2">{ele.title}</li> */}
                <SingleProject
                  index={index}
                  title={ele.title}
                  setModal={setModal}
                  category={ele.category}
                  key={index}
                />
              </div>
            );
          })}

          <li className="my-4 font-semibold stroke-2 text-zinc-700">
            Your Project Here
          </li>
        </ul>
        <ProductModal modal={modal} projects={projects}/>
      </div>
    </div>
  );
};

export default ProjectList;
