import React from "react";
// for making textfield
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// for making const usestate
import { useState } from "react";
// for date
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// for date
// import "react-datepicker/dist/react-datepicker.css";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// //
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

//for date
const ProSpan = styled("span")({
  display: "inline-block",
  height: "1em",
  width: "1em",
  verticalAlign: "middle",
  marginLeft: "0.3em",
  marginBottom: "0.08em",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(https://mui.com/static/x/pro.svg)",
});

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

const names = ["Abinash", "Tomba", "Shashi", "Jackey"];
const domain = ["Cool", "Dizzy", "HairFall", "Skin"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Book() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [domainn, setDomainn] = useState("");
  const [date, setDate] = useState("");
  const nav = useNavigate();

  //getting initial value from local storage
  let initialvalue;
  if (localStorage.getItem("book") === null) {
    initialvalue = [];
  } else {
    initialvalue = JSON.parse(localStorage.getItem("book"));
  }

  //setting it to state
  const [book, setBook] = useState(initialvalue);
  console.log(book);
  console.log(category);

  //handle submit function
  const HandleSubmit = async (e) => {
    e.preventDefault();
    var book_id = 101;
    book_id = book.length > 0 ? book[book.length - 1]["book_id"] + 1 : book_id;
    console.log(book_id);

    const new_data = {
      book_id: book_id,
      name: name,
      address: address,
      phone: phone,
      age: age,
      category: category,
      domainn: domainn,
      date: date,
    };
    console.log(new_data);
    setBook([...book, new_data]);
    await localStorage.setItem("book", JSON.stringify(book));
    nav("/history");
  };

  useEffect(() => {
    localStorage.setItem("book", JSON.stringify(book));
  }, [book]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  // for age
  const handleChange = (value, event) => {
    // for age
    if (value == "age") {
      setAge(event.target.value);
    }
    //for doctor
    else if (value == "doctor") {
      const {
        target: { value },
      } = event;
      setCategory(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
    // for domain
    else {
      const {
        target: { value },
      } = event;
      setDomainn(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };
  console.log("date", date);

  return (
    <div>
      <h4 style={{ color: "brown", textAlign: "center" }}>Book Now</h4>
      <form onSubmit={HandleSubmit}>
        <Box
          sx={{
            width: "70%",
            maxWidth: "100%",
            margin: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {/* for name */}
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="please enter your name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* for address */}
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="please enter your Address"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* for phone */}
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="please enter your Phone number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* for selecting age */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(event) => handleChange("age", event)}
            >
              {[...Array(101).keys()].slice(1).map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* for selecting doctor */}
          <FormControl sx={{ m: 0, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">ChooseDoctor</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={category}
              onChange={(event) => handleChange("doctor", event)}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              fullWidth
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
          {/* for selecting domain */}
          <FormControl sx={{ m: 0, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">
              Choose Specific Domain
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={domainn}
              onChange={(event) => handleChange("domainn", event)}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              fullWidth
            >
              {domain.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, domainn, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* for date */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem
                label={<Label componentName="DatePicker" valueType="date" />}
              >
                <DatePicker onChange={(date) => setDate(date.$d)} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          <Button variant="outlined" color="secondary" type="submit">
            Book
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Book;
