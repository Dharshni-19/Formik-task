import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BooksList from './BooksList';
import AuthorsList from './AuthorsList';


const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleBookSubmit = (values) => {
    if (editingBook) {
      setBooks(books.map(book => book.isbn === values.isbn ? values : book));
    } else {
      setBooks([...books, values]);
    }
    setEditingBook(null);
  };

  const handleAuthorSubmit = (values) => {
    if (editingAuthor) {
      setAuthors(authors.map(author => author.name === values.name ? values : author));
    } else {
      setAuthors([...authors, values]);
    }
    setEditingAuthor(null);
  };

  const handleBookEdit = (book) => {
    setEditingBook(book);
  };

  const handleBookDelete = (isbn) => {
    setBooks(books.filter(book => book.isbn !== isbn));
  };

  const handleAuthorEdit = (author) => {
    setEditingAuthor(author);
  };

  const handleAuthorDelete = (name) => {
    setAuthors(authors.filter(author => author.name !== name));
  };

  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <BookForm
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
        onSubmit={handleBookSubmit}
      />
      <AuthorForm
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
        onSubmit={handleAuthorSubmit}
      />
      <BooksList books={books} onEdit={handleBookEdit} onDelete={handleBookDelete} />
      <AuthorsList authors={authors} onEdit={handleAuthorEdit} onDelete={handleAuthorDelete} />
    </div>
  );
};

export default Dashboard;
