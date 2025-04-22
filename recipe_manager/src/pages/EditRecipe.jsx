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
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const names = ["Breakfast", "Lunch", "Dinner"];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function EditRecipe() {
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("recipe"));
    let filtered_data = data.filter((item) => {
      return item.recipe_id == id;
    }); //simillar to map function
    //console.log(filtered_data, 111);
    setTitle(filtered_data[0]?.title);
    setCategory(filtered_data[0]?.category);
    setIngredients(filtered_data[0]?.ingredients);
    setInstructions(filtered_data[0]?.instructions);
    setImage(filtered_data[0]?.image);
  }, []);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();

  //getting initial value from local storage
  let initialvalue;
  if (localStorage.getItem("recipe") === null) {
    initialvalue = [];
  } else {
    initialvalue = JSON.parse(localStorage.getItem("recipe"));
  }

  //setting it to state
  const [recipe, setRecipe] = useState(initialvalue);
  console.log(recipe);
  console.log(category);

  //handle submit function
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("recipe"));
    const index = data.findIndex((e) => e.recipe_id == id);
    let edit_data = {
      recipe_id: id,
      title,
      category,
      ingredients,
      instructions,
      image,
    };
    data.splice(index, 1, edit_data);

    await localStorage.setItem("recipe", JSON.stringify(data));
    alert("recipe updated successfully");

    nav("/viewrecipe");
  };

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
  }, [recipe]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

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
      <h4 style={{ color: "brown", textAlign: "center" }}>Edit Recipe</h4>
      <form onSubmit={HandleSubmit}>
        <Box
          sx={{
            width: "80%",
            maxWidth: "100%",
            margin: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            cols: 3,
          }}
        >
          <TextField
            fullWidth
            label="Title"
            id="fullWidth"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
          <TextField
            id="outlined-multiline-static"
            label="Ingredients"
            multiline
            rows={4}
            fullWidth
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Instructions"
            multiline
            rows={4}
            fullWidth
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <TextField
            fullWidth
            label="Image"
            id="fullWidth"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {image && <img src={image} alt="no" height={200} width={200}></img>}
          <Button variant="outlined" color="secondary" type="submit">
            Edit
          </Button>
        </Box>
      </form>
    </div>
  );
}
