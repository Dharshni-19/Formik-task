import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authorValidationSchema } from './ValidationSchemas';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(initialValues);

  useEffect(() => {
    if (name) {
      // Fetch the author details using name
      // Example: Fetch from a mock API or state management store
      const fetchedAuthor = { name, birthDate: '1970-01-01', biography: 'Sample biography' };
      setAuthor(fetchedAuthor);
    }
  }, [name]);

  const handleSubmit = (values) => {
    onSubmit(values);
    navigate('/authors');
  };

  return (
    <Formik
      initialValues={author}
      validationSchema={authorValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" readOnly />
          <ErrorMessage name="name" component="div" />
        </div>
        
        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" component="div" />
        </div>

        <div>
          <label htmlFor="biography">Biography</label>
          <Field name="biography" as="textarea" />
          <ErrorMessage name="biography" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
