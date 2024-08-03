import React from 'react';
import { Link } from 'react-router-dom';

const BooksList = ({ books, onEdit, onDelete }) => (
  <div>
    <h2>Books</h2>
    <Link to="/books/add"><button type="button">Add New Book</button></Link>
    <ul>
      {books.map((book) => (
        <li key={book.isbn}>
          {book.title} by {book.author}
          <Link to={`/books/edit/${book.isbn}`}><button>Edit</button></Link>
          <button onClick={() => onDelete(book.isbn)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BooksList;
