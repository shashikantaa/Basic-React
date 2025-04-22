import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <div>
      <h4 style={{ color: "brown", textAlign: "center", marginTop: "10px" }}>
        LOGIN
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
          <TextField fullWidth label="Email ADdress" id="fullWidth" />
          <TextField
            fullWidth
            type="password"
            label="Password"
            id="fullWidth"
          />
          <Button variant="outlined" color="secondary">
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
}
