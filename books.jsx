import React, { Component } from "react";

  import { Link } from "react-router-dom";

  import { Button, Container, Box } from "@material-ui/core";
  import axios from "axios";
  import BookTable from "./booktable";
  
  
  class Book extends React.Component {
    state = {
      books: [],
    };
    componentDidMount() {
       axios
        .get("http://localhost:8081/books")
        .then((res) => {
          console.log(res.data);
         this.setState({ books:res.data });
        });
    }
  
    handleDelete = (bookId) => {
      console.log(bookId);
      axios
      .delete(`http://localhost:8081/books/delete/${bookId}`)
      .then((res) => {
        alert("Deleted book successfully!");
        console.log(res);
        const books = this.state.books.filter((b) => b.bookId != bookId);//1
        this.setState({ books: books });
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
              <Link to="/addbook" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary">
                  Add Book
                </Button>
              </Link>
            </Box>
            <BookTable
              books={this.state.books}
              handleDelete={this.handleDelete}
            />
          </Container>
        </div>
      );
    }
  }
  
  export default Book;