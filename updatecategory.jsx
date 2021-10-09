import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";

class UpdateCategory extends React.Component {
  state = {
    category: {
        categoryName: "",
    },
    errors: {},
    errMsg: "",
  };
  componentDidMount() {
    console.log(this.props.match.params.categoryId);
    axios
      .get(
        `http://localhst:8081/categories/${this.props.match.params.categoryId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ category: res.data });
      })
      .catch((error) => console.log(error));
  }
  handleChange = (event) => {
    const category = { ...this.state.category };
    category[event.target.name] = event.target.value;
    this.setState({ category: category });
    this.setState({ category });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8081/categories/${this.props.match.params.categoryId}`,
        this.state.category
      )
      .then((res) => {
        console.log(res.data);
        alert("Updated Post successfully!!");
        this.props.history.push("/categories");
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  render() {
    return (
      <div>
        <Typography variant="h3">Update Category</Typography>

        <form
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
          }}
          onSubmit={this.handleSubmit}
        >
          <Paper elevation={3} style={{ padding: "15px" }}>
            <TextField
              id="filled-basic"
              label="Category Name"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="categoryName"
              value={this.state.category.categoryName}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Submit
            </Button>
          </Paper>
        </form>
      </div>
    );
  }
}

export default UpdateCategory;