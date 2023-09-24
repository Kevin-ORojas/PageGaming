import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/portfolio" Component={Portfolio} />
      <Route path="/news" Component={News} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
};

export default AppRoutes;
