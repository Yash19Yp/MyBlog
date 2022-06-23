import React from "react";
import AboutUs from "pages/AboutUs";
import BlogPost1 from "pages/BlogPost1";
import Podcasts from "pages/Podcasts";
import Contactus from "pages/Contactus";
import Blog from "pages/Blog";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/blogpost1" element={<BlogPost1 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
