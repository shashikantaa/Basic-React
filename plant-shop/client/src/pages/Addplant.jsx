import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["stock1", "stock2", "stock3"];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Addplant() {
  const [category, setCategory] = useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <h4 style={{ color: "brown", textAlign: "center", marginTop: "10px" }}>
        Add-Plant
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
          <TextField fullWidth label="Plant-Name" id="fullWidth" />
          <TextField fullWidth label="Price" id="fullWidth" />
          <TextField fullWidth label="Stock" id="fullWidth" />
          <TextField fullWidth label="Image-Url" id="fullWidth" />
          <TextField fullWidth label="Description" id="fullWidth" />
          <FormControl sx={{ m: 0, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">
              ChooseCategory
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={category}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, category, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="outlined" color="secondary">
            Add Plant
          </Button>
        </Box>
      </form>
    </div>
  );
}
