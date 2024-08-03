import React from 'react';
import { Link } from 'react-router-dom';

const AuthorsList = ({ authors, onEdit, onDelete }) => (
  <div>
    <h2>Authors</h2>
    <Link to="/authors/add"><button type="button">Add New Author</button></Link>
    <ul>
      {authors.map((author) => (
        <li key={author.name}>
          {author.name}
          <Link to={`/authors/edit/${author.name}`}><button>Edit</button></Link>
          <button onClick={() => onDelete(author.name)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorsList;
