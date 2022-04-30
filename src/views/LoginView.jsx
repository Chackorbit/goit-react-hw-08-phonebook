// import { Form, Button } from 'react-bootstrap';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
});

const input = {
  marginBottom: '30px',
};

export default function LoginView() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(authOperations.logIn(values));
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
          Вход в личный кабинет
        </h1>
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
          Войти
        </Button>
      </form>
    </div>
  );
}

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function LoginView() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (!email || !password) {
//       return;
//     }

//     dispatch(authOperations.logIn({ email, password }));
//     setEmail('');
//     setPassword('');
//   };

//   const SignupSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string()
//       .min(8, 'Too Short!')
//       .max(16, 'Too Long!')
//       .required('Required'),
//   });

//   return (
//     <div>
//       <h1>Sign In</h1>
//       <Formik
//         initialValues={{
//           // name: '',
//           email: '',
//           password: '',
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={async values => {
//           dispatch(authOperations.logIn(values));
//         }}
//       >
//         <Form>
//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="jane@acme.com"
//             type="email"
//           />
//           <ErrorMessage name="email" component="span" />

//           <label htmlFor="password">Password</label>
//           <Field
//             id="password"
//             name="password"
//             type="password"
//             placeholder="********"
//           />
//           <ErrorMessage name="password" component="span" />

//           <button type="submit">Sign In</button>
//         </Form>
//       </Formik>
//     </div>
//   );

//   // return (
//   //   <ThemeProvider theme={theme}>
//   //     <Container component="main" maxWidth="xs">
//   //       <CssBaseline />
//   //       <Box
//   //         sx={{
//   //           marginTop: 8,
//   //           display: 'flex',
//   //           flexDirection: 'column',
//   //           alignItems: 'center',
//   //         }}
//   //       >
//   //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//   //           <LockOutlinedIcon />
//   //         </Avatar>
//   //         <Typography component="h1" variant="h5">
//   //           Sign in
//   //         </Typography>
//   //         <Box component="form" onSubmit={handleSubmit} validate sx={{ mt: 1 }}>
//   //           <TextField
//   //             margin="normal"
//   //             required
//   //             fullWidth
//   //             id="email"
//   //             type="email"
//   //             label="Email Address"
//   //             name="email"
//   //             autoComplete="email"
//   //             autoFocus
//   //             value={email}
//   //             onChange={handleChange}
//   //             // pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
//   //           />
//   //           <TextField
//   //             margin="normal"
//   //             required
//   //             fullWidth
//   //             type="password"
//   //             name="password"
//   //             label="Password"
//   //             id="password"
//   //             autoComplete="current-password"
//   //             value={password}
//   //             onChange={handleChange}
//   //             minLength="8"
//   //           />
//   //           <FormControlLabel
//   //             control={<Checkbox value="remember" color="primary" />}
//   //             label="Remember me"
//   //           />
//   //           <Button
//   //             type="submit"
//   //             fullWidth
//   //             variant="contained"
//   //             sx={{ mt: 3, mb: 2 }}
//   //           >
//   //             Sign In
//   //           </Button>
//   //           <Grid container>
//   //             <Grid item xs>
//   //               {/* <Link href="#" variant="body2">
//   //                 Forgot password?
//   //               </Link> */}
//   //             </Grid>
//   //             <Grid item>
//   //               <Link href="/register" variant="body2">
//   //                 {"Don't have an account? Sign Up"}
//   //               </Link>
//   //             </Grid>
//   //           </Grid>
//   //         </Box>
//   //       </Box>
//   //       <Copyright sx={{ mt: 8, mb: 4 }} />
//   //     </Container>
//   //   </ThemeProvider>
//   // );
// }
