import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Wrapper = styled.div`
  transition: background-color 1s ease-in-out;
  background-color: ${props => props.bgColor};
`;


function App() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
  const [textColor, setTextColor] = useState(''); // Default text color


  useEffect(() => {
    const currentTime = new Date().getHours();

    // Define time intervals and their respective background colors
    if (currentTime >= 9 && currentTime < 18) {
      setBgColor('#ffffff'); // Morning
      setTextColor('#000000')
    } 
    
    else {
      setBgColor('#000000'); // Evening/Night
      setTextColor('#ffffff')

    }
  }, []);
  return (
    <Wrapper bgColor={bgColor} color={textColor} className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
