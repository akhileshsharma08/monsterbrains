import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from '../img/Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBackground,setNavBackground] =useState('')

const changeNavBackground=()=>{
  if(window.scrollY >=150){
    setNavBackground(true)
  }else{
setNavBackground(false)
  }
}
window.addEventListener('scroll',changeNavBackground)

  const HandleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 mb-10  ">
        <div className={`${setNavBackground ? "bg-black" : "bg-transparent" }  m-auto flex justify-between items-center p-2 text-zinc-100  shadow-lg `}>
          <Link to="/">
            <img src={Logo} width={130} height={30} alt=" main logo" className="ml-4" />
          </Link>
          <ul className="hidden sm:flex ">
            <Link to="/" className="hover:text-green-500">
              {" "}
              <li className="p-4 rounded-md text-zinc-100 hover:text-green-500 font-semibold hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/about" className="hover:text-green-500">
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500 font-semibold hover:cursor-pointer">
                About
              </li>
            </Link>
            <Link to="/work" className="hover:text-green-500">
              {" "}
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500 font-semibold hover:cursor-pointer">
                work
              </li>
            </Link>

            <Link to="/contact" className="hover:text-green-500">
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500 font-semibold hover:cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>

          {/* Mobile Button */}
          <div onClick={HandleNav} className="block sm:hidden z-10 right-3">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-10 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-10 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
              <Link to="/">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Home
                </li>
              </Link>
              <Link to="/about">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  About
                </li>
              </Link>
              <Link to="/work">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Work
                </li>
              </Link>

              <Link to="/contact">
                {" "}
                <li
                  onClick={HandleNav}
                  className="text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
