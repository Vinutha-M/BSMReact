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
      // axios
        //.get("https://jsonplaceholder.typicode.com/posts")
        //.then((response) => this.setState({ posts: response.data }))
        //.catch((error) => console.log(error));
    }
  
    handleDelete = (bookId) => {
      console.log(bookId);
   //  axios
        // .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then((res) => {
        //   alert("Deleted post successfully!");
        //   console.log(res);
        //   const posts = this.state.posts.filter((p) => p.id == id);//1
        //   this.setState({ posts: posts });
        // })
        // .catch((error) => console.log(error));
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