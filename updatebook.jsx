import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";

class UpdateBook extends React.Component {
  state = {
    book: {
        bookId: "",
        title: "",
        author: "",
        description: "",
        isbn:" ",
        price:" ",
        publishDate:" ",
        lastUpdatedOn:" ",
    },
  };
  componentDidMount() {
   /* axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ post: res.data });
      })
      .catch((error) => console.log(error));*/
  }
  handleChange = (event) => {
    const book = { ...this.state.book };
    book[event.target.name] = event.target.value;
    this.setState({ book: book });
    this.setState({ book });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    /*axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`,
        this.state.post
      )
      .then((res) => {
        console.log(res.data);
        alert("Updated Post successfully!!");
        this.props.history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
        return;
      });*/
  };

  render() {
    return (
      <div>
        <Typography variant="h3">Update Book</Typography>

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
              label="Book Id"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="bookId"
              value={this.state.book.bookId}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Title"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="title"
              value={this.state.book.title}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Author"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="author"
              value={this.state.book.author}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Description"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="description"
              value={this.state.book.description}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Isbn"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="isbn"
              value={this.state.book.isbn}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Price"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="price"
              value={this.state.book.price}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Publish Date"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="publishDate"
              value={this.state.book.publishDate}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Last Updated On"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="lastUpdatedOn"
              value={this.state.book.lastUpdatedOn}
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

export default UpdateBook;