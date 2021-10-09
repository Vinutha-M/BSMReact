import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";

class UpdateBook extends React.Component {
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
  componentDidMount() {
    console.log(this.props.match.params.bookId);
    axios
      .get(`http://localhost:8081/books/${this.props.match.params.bookId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ book: res.data });
      })
      .catch((error) => console.log(error));
  }
  handleChange = (event) => {
    const book = { ...this.state.book };
    book[event.target.name] = event.target.value;
    this.setState({ book: book });
    this.setState({ book });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/books/${this.props.match.params.bookId}`,
        this.state.book
      )
      .then((res) => {
        console.log(res.data);
        alert("Updated Book successfully!!");
        this.props.history.push("/books");
      })
      .catch((error) => {
        console.log(error);
        return;
      });
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