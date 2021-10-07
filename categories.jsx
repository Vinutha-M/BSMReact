import React, { Component } from "react";

  import { Link } from "react-router-dom";

  import { Button, Container, Box } from "@material-ui/core";
  import axios from "axios";
  import CategoryTable from "./categorytable";
  
  
  class Category extends React.Component {
    state = {
      categories: [],
    };
    componentDidMount() {
       axios
        .get("http://localhost:8081/categories")
        .then((res) => {
          console.log(res.data);
          this.setState({ categories:res.data });
        });
      
    }
  
    handleDelete = (categoryId) => {
      console.log(categoryId);
      axios
        .delete(`http://localhost:8081/categories/delete/${categoryId}`)
        .then((res) => {
         alert("Deleted categories  successfully!");
         console.log(res);
         const categories = this.state.categories.filter((c) => c.categoryId != categoryId);//1
         this.setState({ categories: categories });
        })
        .catch((error) => console.log(error));
    };
    render() {
      return (
        <div>
          <Container>
            <Box
              style={{ float: "right", marginTop: "20px", marginBottom: "10px" }}
            >
              <Link to="/addcategory" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary">
                  Add Category
                </Button>
              </Link>
            </Box>
            <CategoryTable
              categories={this.state.categories}
              handleDelete={this.handleDelete}
            />
          </Container>
        </div>
      );
    }
  }
  
  export default Category;