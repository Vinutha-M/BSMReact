import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
//import axios from "axios";
import Joi from "joi-browser";

class AddCategory extends React.Component {
  state = {
    category: {
      categoryId: "",
      categoryName: "",
    },
    errors: {},
    errMsg: "",
  };

  // schema to validate
  schema = {
    categoryId: Joi.number().min(1000).required(),
    categoryName: Joi.string().min(3).max(30).alphanum().required(),
  };

  handleChange = (event) => {
    // event.target.name - name of field
    // event.target.value - value entered by the user
    //this.setState({ [event.target.name]: event.target.value }); userId,id
    const category = { ...this.state.category };
    //post["userId"] = 1001;
    //post["id"] = 200;
    //post["title"] = "Post 200";
    //post.body = "Post 200 body";
    console.log(category);
    //post[userId] = 100
    //post[]
    category[event.target.name] = event.target.value;
    this.setState({ category: category });
    this.setState({ category });
  };

  // form validation method
  validate = () => {
    const errors = {};
    // Validate account details with schema
    const result = Joi.validate(this.state.category, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    // Initialize error object with errors, if validate method returns errors
    if (result.error !== null) {
      for (let err of result.error.details) {
        errors[err.path[0]] = err.message;
      }
    }
    console.log(errors);
    // return null if no errors otherwise return errors
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // const post = {
    //   userId: this.state.userId,
    //   id: this.state.id,
    //   title: this.state.title,
    //   body: this.state.body,
    // };
    const errors = this.validate(); // null / errors
    // Set state error object with errors or empty object based on
    // errors return by the validate() method
    this.setState({ errors: errors || {} });
    // if errors exists in the form , return to the login page
    console.log(errors);

    if (errors) return;
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", this.state.post)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert("Added Post successfully!!");
    //     this.props.history.push("/posts");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({ errMsg: error.response.data.message });
    //   });
  };
  render() {
    return (
      <div>
        <Typography variant="h3">Add Category</Typography>
        {this.state.errMsg && (
          <div className="alert alert-danger" role="alert">
            {this.state.errMsg}
          </div>
        )}
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
              label="Category Id "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="categoryId "
              value={this.state.categoryId }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.categoryId }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Category Name "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="categoryName "
              value={this.state.categoryName}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.categoryName}
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
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

export default AddCategory;