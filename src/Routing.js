import Footer from "./components/Footer/Footer";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import News from "./components/News/News";
import Stores from "./components/Stores/Stores";
import AdminPage from "./pages/AdminPage";
import JewelryAndWatches from "./components/Jewelry&Watches/Jewelry&Watches";
const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/jewelry&watches",
      element: <JewelryAndWatches />,
      id: 2,
    },
    {
      link: "/news",
      element: <News />,
      id: 3,
    },
    {
      link: "/stores",
      element: <Stores />,
      id: 4,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
