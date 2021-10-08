import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";
import Joi from "joi-browser";

class AddBook extends React.Component {
  state = {
    book: {
      title: "",
      author: "",
      description: "",
      isbn:" ",
      price:" ",
      publishDate:" ",
      lastUpdatedOn:" ",
    },
    errors: {},
    errMsg: "",
  };

  // schema to validate
  schema = {
    title: Joi.string().min(3).max(30).alphanum().required(),
    author: Joi.string().required(),
    description: Joi.string().required(),
    isbn: Joi.string().min(4).max(8).required(),
    price: Joi.number().positive().greater(0).required(),
    publishDate: Joi.date().raw().required(),
    lastUpdatedOn: Joi.date().raw().required(),
  };

  handleChange = (event) => {
    // event.target.name - name of field
    // event.target.value - value entered by the user
    //this.setState({ [event.target.name]: event.target.value }); userId,id
    const book = { ...this.state.book };
    //post["userId"] = 1001;
    //post["id"] = 200;
    //post["title"] = "Post 200";
    //post.body = "Post 200 body";
    console.log(book);
    //post[userId] = 100
    //post[]
    book[event.target.name] = event.target.value;
    this.setState({ book: book });
    this.setState({ book });
  };

  // form validation method
  validate = () => {
    const errors = {};
    // Validate account details with schema
    const result = Joi.validate(this.state.book, this.schema, 
      {abortEarly: false, }
      );
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
    axios
       .post("http://localhost:8081/books", this.state.book)
       .then((res) => {
         console.log(res.data);
        alert("Added Book successfully!!");
         this.props.history.push("/books");
       })
       .catch((error) => {
        console.log(error);
        this.setState({ errMsg: errors.res.data.message });
      });
  };
  render() {
    return (
      <div>
        <Typography variant="h3">Add Book</Typography>
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
              label="Title"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.title}
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Author"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="author"
              value={this.state.author }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.author }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Description"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="description"
              value={this.state.description }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.description }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Isbn"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="isbn"
              value={this.state.isbn }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.isbn }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Price"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="price"
              value={this.state.price }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.price }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Publish Date"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="publishDate"
              value={this.state.publishDate }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.publishDate }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Last Updated On"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="lastUpdatedOn"
              value={this.state.lastUpdatedOn }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.lastUpdatedOn }
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

export default AddBook;