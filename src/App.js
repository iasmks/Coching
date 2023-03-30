import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from "./Components/Navebar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Course from "./Components/Course";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Price from "./Components/Price";
import Team from "./Components/Team";
import Darbhanga from './Components/Darbhanga';
import Patna from './Components/Patna';
import Muzaffarpur from './Components/Muzaffarpur';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navebar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="course" element={<Course />} />
          <Route path="price" element={<Price />} />
          <Route path="team" element={<Team />} />
          <Route path="darbhanga" element={<Darbhanga />} />
          <Route path="patna" element={<Patna />} />
          <Route path="muzaffarpur" element={<Muzaffarpur />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}
export default App;
