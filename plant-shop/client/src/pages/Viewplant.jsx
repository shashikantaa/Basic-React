import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Viewplant() {
  return (
    <div
      style={{
        // display: "flex",
        //flexDirection: "row",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: 20,
        marginTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            plant name
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography gutterBottom variant="" component="div">
              Amount : 40
            </Typography>
            <Typography
              gutterBottom
              variant=""
              component="div"
              style={{ marginLeft: "10px" }}
            >
              stock : 50
            </Typography>
          </div>
          <Typography gutterBottom variant="" component="div">
            Category : stock1
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <a href="#" style={{ marginLeft: "70%" }}>
            <EditIcon />
          </a>
          <a href="#" style={{ marginLeft: "10%" }}>
            <DeleteIcon sx={{ color: "red" }} />
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            plant name
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography gutterBottom variant="" component="div">
              Amount : 40
            </Typography>
            <Typography
              gutterBottom
              variant=""
              component="div"
              style={{ marginLeft: "10px" }}
            >
              stock : 50
            </Typography>
          </div>
          <Typography gutterBottom variant="" component="div">
            Category : stock1
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <a href="#" style={{ marginLeft: "70%" }}>
            <EditIcon />
          </a>
          <a href="#" style={{ marginLeft: "10%" }}>
            <DeleteIcon sx={{ color: "red" }} />
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            plant name
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography gutterBottom variant="" component="div">
              Amount : 40
            </Typography>
            <Typography
              gutterBottom
              variant=""
              component="div"
              style={{ marginLeft: "10px" }}
            >
              stock : 50
            </Typography>
          </div>
          <Typography gutterBottom variant="" component="div">
            Category : stock1
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <a href="#" style={{ marginLeft: "70%" }}>
            <EditIcon />
          </a>
          <a href="#" style={{ marginLeft: "10%" }}>
            <DeleteIcon sx={{ color: "red" }} />
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            plant name
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography gutterBottom variant="" component="div">
              Amount : 40
            </Typography>
            <Typography
              gutterBottom
              variant=""
              component="div"
              style={{ marginLeft: "10px" }}
            >
              stock : 50
            </Typography>
          </div>
          <Typography gutterBottom variant="" component="div">
            Category : stock1
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <a href="#" style={{ marginLeft: "70%" }}>
            <EditIcon />
          </a>
          <a href="#" style={{ marginLeft: "10%" }}>
            <DeleteIcon sx={{ color: "red" }} />
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            plant name
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography gutterBottom variant="" component="div">
              Amount : 40
            </Typography>
            <Typography
              gutterBottom
              variant=""
              component="div"
              style={{ marginLeft: "10px" }}
            >
              stock : 50
            </Typography>
          </div>
          <Typography gutterBottom variant="" component="div">
            Category : stock1
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <a href="#" style={{ marginLeft: "70%" }}>
            <EditIcon />
          </a>
          <a href="#" style={{ marginLeft: "10%" }}>
            <DeleteIcon sx={{ color: "red" }} />
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            plant name
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography gutterBottom variant="" component="div">
              Amount : 40
            </Typography>
            <Typography
              gutterBottom
              variant=""
              component="div"
              style={{ marginLeft: "10px" }}
            >
              stock : 50
            </Typography>
          </div>
          <Typography gutterBottom variant="" component="div">
            Category : stock1
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <a href="#" style={{ marginLeft: "70%" }}>
            <EditIcon />
          </a>
          <a href="#" style={{ marginLeft: "10%" }}>
            <DeleteIcon sx={{ color: "red" }} />
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
