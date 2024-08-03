import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import BookForm from './Components/BookForm';
import AuthorForm from './Components/AuthorForm';
import BooksList from './Components/BooksList';
import AuthorsList from './Components/AuthorsList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/add" element={<BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={() => {}} />} />
          <Route path="/books/edit/:isbn" element={<BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={() => {}} />} />
          <Route path="/authors" element={<AuthorsList />} />
          <Route path="/authors/add" element={<AuthorForm initialValues={{ name: '', birthDate: '', biography: '' }} onSubmit={() => {}} />} />
          <Route path="/authors/edit/:name" element={<AuthorForm initialValues={{ name: '', birthDate: '', biography: '' }} onSubmit={() => {}} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
