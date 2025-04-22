import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addcategory() {
  const [cname, setCname] = useState();
  const nav = useNavigate;
  const handleSubmit = async () => {
    await axios
      .post("http://localhost:3001/api/category/categoryInsert", { cname })
      .then((res) => {
        console.log(res);
        alert("Inserted Successfully");
        nav("/category");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h4 style={{ color: "brown", textAlign: "center", marginTop: "10px" }}>
        Add-Category
      </h4>
      <form>
        <Box
          sx={{
            width: "80%",
            maxWidth: "100%",
            margin: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            fullWidth
            label="Category-Name"
            id="fullWidth"
            onChange={(e) => setCname(e.target.value)}
          />

          <Button variant="outlined" color="secondary" onClick={handleSubmit}>
            Add Category
          </Button>
        </Box>
      </form>
    </div>
  );
}

//intall axios
//npm i axios to send api request and connect with backend
