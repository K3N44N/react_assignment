import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    firstName: yup.string()
    .max(25, 'First name cannot be more than 25 characters')
    .min(2,'First name can not be less than 2 characters')
    .required('First name is Required'),
    lastName: yup.string()
    .max(25, 'Last name cannot be more than 25 characters')
    .min(2,'Last name can not be less than 2 characters')
    .required('Last name is Required'),
    username: yup.string()
    .max(25, 'Username cannot be more than 25 characters')
    .min(2,'Username can not be less than 2 characters')
    .required('Username is Required'),
    email: yup.string().email().matches(/@[^.]*\./),
    phoneNumber: yup.string(),
    password: yup.string(),
    confirmPassword: yup.string(),

})