import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
function History() {
  const [book, setBook] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("book"));
    setBook(data);
  }, []);
  console.log(book);

  // function for delete
  const handleDelete = (id) => {
    // Displaying a confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete?");
    // If user confirms the deletion
    if (confirmed) {
      // Filtering the data array based on the condition
      const filtered_data = book.filter((item) => {
        return item.book_id !== id;
      });
      // Logging the filtered data to the console
      console.log(filtered_data);
      // Setting the state of 'book' with the filtered data
      setBook(filtered_data);
      // Storing the filtered data in the local storage
      localStorage.setItem("book", JSON.stringify(filtered_data));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "auto 0",
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 0.5fr)",
      }}
    >
      {book && book.length > 0
        ? book.map((item) => {
            return (
              <div
                className="card text-bg-primary mb-3"
                style={{
                  width: "18rem",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <div className="card-header">{item.domainn}</div>
                <div className="card-body">
                  <h5 className="card-title">Patient Name: {item.name}</h5>
                  <p>Consult Doctor: {item.category}</p>
                  <p className="card-text">Address: {item.address}</p>
                  <p>Phone: {item.phone}</p>
                  <p>Date: {item.date}</p>
                  <p>Age: {item.age}</p>
                  <p>Domain: {item.domainn}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {/* for edit */}
                  <IconButton
                    style={{ position: "relative", marginLeft: "140px" }}
                    aria-label="edit"
                  >
                    <Link to={`/edit/${item.book_id}`}>
                      <EditIcon style={{ color: "white" }} />
                    </Link>
                  </IconButton>
                  {/* for delete */}
                  <IconButton
                    style={{
                      position: "relative",
                      marginLeft: "40px",
                      color: "red",
                    }}
                    aria-label="delete"
                    onClick={() => handleDelete(item.book_id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            );
          })
        : "no record found"}
    </div>
  );
}

export default History;
