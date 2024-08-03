import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bookValidationSchema } from './ValidationSchemas';

const BookForm = ({ initialValues, onSubmit }) => {
  const { isbn } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(initialValues);

  useEffect(() => {
    if (isbn) {
      // Fetch the book details using ISBN
      // Example: Fetch from a mock API or state management store
      const fetchedBook = { title: 'Sample Book', author: 'Sample Author', isbn, publicationDate: '2024-01-01' };
      setBook(fetchedBook);
    }
  }, [isbn]);

  const handleSubmit = (values) => {
    onSubmit(values);
    navigate('/books');
  };

  return (
    <Formik
      initialValues={book}
      validationSchema={bookValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" component="div" />
        </div>
        
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" type="text" />
          <ErrorMessage name="author" component="div" />
        </div>

        <div>
          <label htmlFor="isbn">ISBN</label>
          <Field name="isbn" type="text" readOnly />
          <ErrorMessage name="isbn" component="div" />
        </div>

        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <Field name="publicationDate" type="date" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
