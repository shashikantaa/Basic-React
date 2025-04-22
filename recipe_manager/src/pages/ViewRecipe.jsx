import * as React from "react";
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ViewRecipe() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // function for edit
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recipe"));
    setRecipe(data);
  }, []);
  console.log(recipe);

  // function for delete
  const handleDelete = (id) => {
    const filtered_data = recipe.filter((item) => {
      return item.recipe_id !== id;
    });
    console.log(filtered_data);
    setRecipe(filtered_data);
    localStorage.setItem("recipe", JSON.stringify(filtered_data));
    alert("Are you sure, You want to delete");
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "auto 0",
        marginTop: "20px",
        // display: "flex",
        // flexDirection: "row",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
      }}
    >
      {recipe && recipe.length > 0
        ? recipe.map((item) => {
            console.log(item.image);
            return (
              <>
                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item.title}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image}
                    src={item.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.category}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    {/* for delete */}
                    <IconButton
                      style={{ position: "relative", left: 100, color: "red" }}
                      aria-label="delete"
                      onClick={() => handleDelete(item.recipe_id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {/* visibility icon */}
                    <Link to={`/singlerecipe/${item.recipe_id}`}>
                      <IconButton
                        style={{
                          position: "relative",
                          left: 105,
                          color: "blue",
                        }}
                        aria-label="delete"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                    {/* for Edit Icon */}
                    <IconButton
                      style={{ position: "relative", left: 110 }}
                      aria-label="edit"
                    >
                      <Link to={`/editrecipe/${item.recipe_id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>{item.instructions}</Typography>
                      <Typography paragraph>{item.ingredients}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </>
            );
          })
        : "not found"}
    </div>
  );
}
