import * as React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/123">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/abc">NotFound</Link></li>
    </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/:userId" element={<About />} />
        <Route path="contact" element={<Contact />} />
     <Route component={NotFound}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
