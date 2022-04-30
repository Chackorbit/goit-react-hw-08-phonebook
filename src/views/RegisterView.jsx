import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  name: yup
    .string('Enter your name')
    .min(2, 'Name should be of minimum 2 characters length')
    .required('Name is required'),
});

const input = {
  marginBottom: '30px',
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(authOperations.register(values));
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: '600px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <h1
          style={{
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          Регистрация
        </h1>
        <TextField
          style={input}
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          style={input}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          style={input}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Зарегистрировать
        </Button>
      </form>
    </div>
  );
}
