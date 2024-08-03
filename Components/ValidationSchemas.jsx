import * as Yup from 'yup';

// Validation schema for books
export const bookValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string()
    .required('ISBN number is required')
    .matches(/^\d{13}$/, 'ISBN must be 13 digits'),
  publicationDate: Yup.date().required('Publication date is required')
});

// Validation schema for authors
export const authorValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthDate: Yup.date().required('Birth date is required'),
  biography: Yup.string().required('Biography is required')
});
