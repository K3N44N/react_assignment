import { useFormik } from "formik";
import { RegisterSchema } from "../utils/RegisterSchema";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { captureChanges } from "../store/ProfileReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
  });

  const handleSubmit = async () => {
    if (formik.isValid) {
      try {
        const response = await axios.post("https://fakestoreapi.com/users", {
          email: profileData.email,
          username: profileData.username,
          password: profileData.password,
          name: {
            firstname: profileData.firstName,
            lastname: profileData.lastName,
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: profileData.phoneNumber,
        });

        dispatch(captureChanges({ ...profileData, ...(await response.data) }));
        console.log(response.data);
        navigate("/profile");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    const t = { ...profileData, [e.target.name]: e.target.value };
    setProfileData(t);
    formik.handleChange(e);
  };

  const showError = (errorKey) => {
    if (formik.errors[errorKey]) {
      return (
        <div className="col-sm-6 text-danger">{formik.errors[errorKey]}</div>
      );
    } else return null;
  };
  const showSubmitError = () => {
    if (!formik.isValid) {
      return (
        <div className="col-sm-6 text-danger">
          {JSON.stringify(formik.errors)}
        </div>
      );
    } else return null;
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Register!</h1>
      <label for="firstName" className="form-label">
        First name
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["firstName"]}
        formik={formik}
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter Last Name here..."
      ></input>
      {showError("firstName")}
      <label for="lastName" className="form-label">
        Last name
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["lastName"]}
        formik={formik}
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter Last Name here..."
      ></input>
      {showError("lastName")}
      <label for="username" className="form-label">
        Username:
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["username"]}
        formik={formik}
        type="text"
        id="username"
        name="username"
        placeholder="Enter Username here..."
      ></input>
      {showError("username")}
      <label for="email" className="form-label">
        Email:
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["email"]}
        formik={formik}
        type="text"
        id="email"
        name="email"
        placeholder="Enter Email here..."
      ></input>
      {showError("email")}
      <label for="phoneNumber" className="form-label">
        Phone Number:
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["phoneNumber"]}
        formik={formik}
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter Phone Number here..."
      ></input>
      {showError("phoneNumber")}
      <label for="password" className="form-label">
        Password:
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["password"]}
        formik={formik}
        type="password"
        name="password"
        id="password"
      ></input>
      {showError("password")}
      <label for="confirmPassword" className="form-label">
        Confirm Password:
      </label>
      <input
        className="form-control"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["confirmPassword"]}
        formik={formik}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
      ></input>
      {showError("confirmPassword")}

      <button
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmit}
        style={{ margin: "20px" }}
      >
        Sign Up
      </button>
      {showSubmitError()}

      <div>{JSON.stringify(profileData)}</div>
    </div>
  );
};

export default Register;
