import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, IconButton } from "@mui/material";
import logo_Adidas from "../Image/adidas3.png";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const navigate = useNavigate();
  return (
    <Box id="header">
      <Box sx={{ width: "90%" }} className="container">
        <Box className="header">
          <Box className="header-top">
            <Avatar sx={{ width: "95px" }} src={logo_Adidas} alt="adidas" />
            <Box className="header_nav">
              <IconButton onClick={() => navigate("/admin")}>
                <AddOutlinedIcon />
              </IconButton>
              <Typography>MEN</Typography>
              <Typography>WOMEN</Typography>
              <Typography>KIDS</Typography>
              <Typography>SALE</Typography>
              <Typography>3 STRIPE LIFE</Typography>
            </Box>
            <Box className="header_search">
              {" "}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <PermIdentityOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <WorkOutlineOutlinedIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
