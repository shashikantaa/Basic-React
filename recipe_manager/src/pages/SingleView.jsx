import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleView() {
  //const params = useParams();
  //console.log(params.id); or
  const { id } = useParams();
  const [singlerecipe, setSinglerecipe] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recipe"));
    const single = data.filter((item) => {
      return item.recipe_id == id;
    });
    console.log(single);
    setSinglerecipe(...single);
  }, []);
  //console.log(single);
  console.log(id);
  console.log(singlerecipe);
  return (
    <div>
      {singlerecipe ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={singlerecipe.image}
            title="Recipe Image"
          />{" "}
          {/* Access image directly */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {singlerecipe.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Add your description here */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ) : (
        "Recipe not found"
      )}
    </div>
  );
}
