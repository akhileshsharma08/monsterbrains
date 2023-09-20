
import React from "react";
import Logo from '../img/Logo.png'
import { Link } from "react-router-dom";
import '../App.css'

const Footer = () => {
    
      return (
        <>
          <footer className="footer text-white body-font bg-black border-green-500  border-t-2 pb-4 pt-12">
            <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
              <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src={Logo} width={180} height={80} alt="logo"/>
                <span className="ml-3 text-xl"></span>
              </Link>
              <p className="text-sm text-gray-50 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                © {new Date().getFullYear()} Monsterbrains developed by —
                <a
                  href="/"
                  className="text-gray-600 ml-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Akhilesh
                </a>
              </p>
            </div>
          </footer>
        </>
      );
}

export default Footer