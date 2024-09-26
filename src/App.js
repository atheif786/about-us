import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './navbar/Navbar.jsx';
import About from './about/About.jsx';
import Work from './about/Work.jsx';
import Award from './about/Award.jsx';

const App = () => {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route  path="About.jsx" element={<About />} />
          <Route path="Work.jsx" element={<Work />} />
          <Route path="Award.jsx" element={<Award />}/>
      </Routes>
    </BrowserRouter>
    );
  }
  

export default App
