import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Jewelry from "./components/Jewelry/Jewelry";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/jewelry",
      element: <Jewelry />,
      id: 2,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
