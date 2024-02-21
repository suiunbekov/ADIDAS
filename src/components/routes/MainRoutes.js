import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import MainPage from "../../pages/MainPage";
import Samba from "../samba";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/pages", element: <Samba />, id: 1 },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
