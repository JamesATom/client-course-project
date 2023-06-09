import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup
    .string('Enter your name')
    .min(5, 'Should be of min 5 characters')
    .required('Name is required'),
    lastname: yup
    .string('Enter your lastname')
    .min(5, 'Should be of min 5 characters')
    .required('Lastname is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});