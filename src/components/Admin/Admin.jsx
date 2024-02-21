import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [img, setImg] = useState("");

  function hendleChane() {
    let newObj = {
      name: name,
      price: price,
      type: type,
      img: img,
    };
    addProduct(newObj);
  }

  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
          <Button
            onClick={() => (navigate("/"), hendleChane())}
            sx={{
              color: "#000",
              border: "1px solid blue",
              fontWeight: "bold",
              background: "transparent",
              "&:hover": {
                background: "blue",
                color: "#fff",
              },
            }}
            variant="contained"
          >
            add Shoes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
