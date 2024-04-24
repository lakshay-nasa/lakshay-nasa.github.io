import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Common/Pre";
import Navbar from "./components/Common/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Common/Footer";
import Resume from "./components/Resume/ResumeNew";
import MyTimeline from "./components/MyTimeline/MyTimeline";
import MyCreations from "./components/My Creations/MyCreations";

import Automation from "./components/My Creations/docs/automation"
import Visiogen from './components/My Creations/docs/visiogen';
import MyGallery from "./components/My Creations/docs/gallery";
import MyEngagements from "./components/My Creations/docs/Engagements";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Blogs from "./components/Projects copy/n";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<MyTimeline />} />
          <Route path="/creations" element={<MyCreations />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />

          <Route path="/automation" element={<Automation/>} />
          <Route path="/visiogen" element={<Visiogen/>} />
          <Route path="/gallery" element={<MyGallery/>} />
          <Route path="/engagements" element={<MyEngagements/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

