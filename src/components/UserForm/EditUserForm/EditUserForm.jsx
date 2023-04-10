import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import css from './EditUserForm.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { editUserForm } from '../../../redux/userForm/slice';
import { selectEditUserForm } from '../../../redux/userForm/selectors';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


const EditUserForm = () => {
  const editFormSelector = useSelector(selectEditUserForm)
  const dispatch = useDispatch();

  console.log(editFormSelector, 'перерендер дрище')

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      dispatch(editUserForm(values))
      formik.resetForm()
    },
  });

  // console.log(formik)

  return (
    <div>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <label>Edit your data</label>
        <TextField
          fullWidth
          id="email"
          name="email"
          autoComplete='off'
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ my: 2 }}
        />
        <TextField
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
        <Button color="primary" variant="contained" fullWidth type="submit"
          sx={{ my: 2 }}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default EditUserForm;