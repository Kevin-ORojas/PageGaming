import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import Contact from "./components/Contact";

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
