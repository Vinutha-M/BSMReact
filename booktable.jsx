import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

import { Link } from "react-router-dom";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@material-ui/core";

const BookTable = ({ books, handleDelete }) => {
  //const { posts, handleDelete } = props;
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Book Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Isbn</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Publish Date</TableCell>
            <TableCell align="right">Last Updated On</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.bookId}>
              <TableCell component="th" scope="row">
                {book.bookId}
              </TableCell>
              <TableCell align="right">{book.title}</TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.description}</TableCell>
              <TableCell align="right">{book.isbn}</TableCell>
              <TableCell align="right">{book.price}</TableCell>
              <TableCell align="right">{book.publishDate}</TableCell>
              <TableCell align="right">{book.lastUpdatedOn}</TableCell>
              <TableCell align="right">
                <Box display="flex" flexDirection="row">
                  <IconButton color="primary" aria-label="update">
                    <Link to={`/update/${book.bookId}`}>
                      <UpdateIcon />
                    </Link>
                  </IconButton>

                  <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon onClick={() => handleDelete(book.bookId)} />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookTable;