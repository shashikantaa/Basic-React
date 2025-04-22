import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { Link } from "react-router-dom";

function Viewcategory() {
  const [category, setCategory] = useState();
  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:3001/api/category/getcategory")
        .then((res) => {
          console.log(res.data);
          //setCategory(res.data);
          setCategory(() => res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getdata();
  }, [category]);

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:3001/api/category/deletecategory/${id}`)
      .then((res) => {
        console.log(res);
        alert("Category Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Box
                // height={200}
                width="240%"
                p={2}
                marginLeft={2}
                sx={{
                  marginTop: "100px",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  boxShadow: "0px 2px 5px rgba(0,0,0,1.32)", // Adjust shadow properties as needed
                }}
              >
                <p
                  style={{
                    marginLeft: "10px",
                    fontSize: "20px",
                    paddingBottom: "5px",
                    borderBottom: "solid",
                    borderBottomColor: "gray",
                  }}
                >
                  category
                </p>
                <div style={{ marginLeft: "10px" }}>
                  <ul className="list-group list-group-horizontal">
                    <li
                      style={{
                        width: "15%",
                        backgroundColor: "black",
                        fontWeight: "bold",
                        color: "white",
                      }}
                      className="list-group-item rounded-0 "
                    >
                      sl
                    </li>
                    <li
                      style={{
                        width: "34%",
                        backgroundColor: "black",
                        fontWeight: "bold",
                        color: "white",
                      }}
                      className="list-group-item rounded-0"
                    >
                      category
                    </li>
                    <li
                      style={{
                        width: "50%",
                        backgroundColor: "black",
                        fontWeight: "bold",
                        color: "white",
                      }}
                      className="list-group-item rounded-0"
                    >
                      Action
                    </li>
                  </ul>

                  {category
                    ? category.map((item, index) => (
                        <ul className="list-group list-group-horizontal">
                          <li
                            style={{ width: "15%" }}
                            className="list-group-item rounded-0"
                          >
                            {index + 1}
                          </li>
                          <li
                            style={{ width: "34%" }}
                            className="list-group-item rounded-0"
                          >
                            {item.cname}
                          </li>
                          <li
                            style={{ width: "50%" }}
                            className="list-group-item rounded-0"
                          >
                            <Link to={`/editcategory/${item._id}`}>
                              <Button variant="contained">Edit</Button>
                            </Link>
                            <Button
                              variant="contained"
                              color="error"
                              style={{ marginLeft: "5px" }}
                              onClick={() => handleDelete(item._id)}
                            >
                              Delete
                            </Button>
                          </li>
                        </ul>
                      ))
                    : "no record found"}

                  {/* //   <ul className="list-group list-group-horizontal">
                //     <li
                //       style={{ width: "15%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       2
                //     </li>
                //     <li
                //       style={{ width: "34%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       BCA
                //     </li>
                //     <li
                //       style={{ width: "50%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       <Button variant="contained" href="/editcategory">
                //         Edit
                //       </Button>
                //       <Button
                //         variant="contained"
                //         color="error"
                //         style={{ marginLeft: "5px" }}
                //       >
                //         Delete
                //       </Button>
                //     </li>
                //   </ul>
                //   <ul className="list-group list-group-horizontal">
                //     <li
                //       style={{ width: "15%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       3
                //     </li>
                //     <li
                //       style={{ width: "34%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       B.Tech
                //     </li>
                //     <li
                //       style={{ width: "50%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       <Button variant="contained" href="/editcategory">
                //         Edit
                //       </Button>
                //       <Button
                //         variant="contained"
                //         color="error"
                //         style={{ marginLeft: "5px" }}
                //       >
                //         Delete
                //       </Button>
                //     </li>
                //   </ul>
                //   <ul className="list-group list-group-horizontal">
                //     <li
                //       style={{ width: "15%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       4
                //     </li>
                //     <li
                //       style={{ width: "34%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       M.Tech
                //     </li>
                //     <li
                //       style={{ width: "50%" }}
                //       className="list-group-item rounded-0"
                //     >
                //       <Button variant="contained" href="/editcategory">
                //         Edit
                //       </Button>
                //       <Button
                //         variant="contained"
                //         color="error"
                //         style={{ marginLeft: "5px" }}
                //       >
                //         Delete
                //       </Button>
                //     </li>
                //   </ul> */}
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewcategory;
