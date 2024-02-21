import React from "react";
import ProductCard from "../product/ProductCard";
import { Box } from "@mui/material";
import Section from "../Section/Section";
import "./MainPage.css";

const MainPage = () => {
  return (
    <Box id="pages">
      <Box className="container">
        <Box classname="pages">
          <ProductCard />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
