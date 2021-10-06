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

const CategoryTable = ({ categories, handleDelete }) => {
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
            <TableCell align="right">Category Id</TableCell>
            <TableCell align="right">Category Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.categoryId}>
              <TableCell component="th" scope="row">
                {category.categoryId}
              </TableCell>
              <TableCell align="right">{category.categoryName}</TableCell>
              <TableCell align="right">
                <Box display="flex" flexDirection="row">
                  <IconButton color="primary" aria-label="update">
                    <Link to={`/update/${category.categoryId}`}>
                      <UpdateIcon />
                    </Link>
                  </IconButton>

                  <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon onClick={() => handleDelete(category.categoryId)} />
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

export default CategoryTable;