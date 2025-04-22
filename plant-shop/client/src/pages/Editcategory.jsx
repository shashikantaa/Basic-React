import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Editcategory() {
  const { id } = useParams();
  const [category, setCategory] = useState("");

  const nav = useNavigate();
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:3001/api/category/single-view/${id}`)
        .then((res) => {
          console.log(id);
          setCategory(res.data.data.cname);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [id]);

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:3001/api/category/update/${id}`, {
        cname: category,
      })
      .then((res) => {
        console.log(res);
        alert("Edited Succesfully");
        nav("/viewcategory");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4 style={{ color: "brown", textAlign: "center", marginTop: "10px" }}>
        Edit-Category
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
            id="fullWidth"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <Button variant="outlined" color="secondary" onClick={handleSubmit}>
            Edit Category
          </Button>
        </Box>
      </form>
    </div>
  );
}
