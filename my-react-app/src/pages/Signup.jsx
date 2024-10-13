import React from "react";
import logoImg from "../assets/logo.png";

import { IconButton, Input, InputAdornment, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import SignupValidations from "../validations/SignupValidations";
import { SignupRequest } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = SignupValidations(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const result = await SignupRequest(formData);
        console.log("Signup Successfull");
        navigate("/");
      } catch (error) {
        console.log("Signup error");

        setErrors({
          ...errors,
          SignupRequest: "Signup Failed Please Try again.",
        });
      }
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-sky-50">
      <div className="box-content flex flex-col items-center justify-start  bg-white border-2 border-transparent rounded-md  phone:w-[350px] phone:h-[600px] tablet:w-[400px] tablet:h-[600px] desktop:w-[500px] desktop:h-[650px] ">
        <img
          src={logoImg}
          alt="logo"
          className="p-0 m-0 size-30 phone:size-20 tablet:size-24 desktop:size-32"
        />
        <div className="flex flex-col items-center justify-center gap-3 mb-5 ">
          <h1 className="font-serif font-bold tracking-normal text-purple-600 text-sp phone:text-lg tablet:text-xl desktop:text-2xl ">
            Sign up
          </h1>
          <h2 className="font-medium text-gray-400 phone:text-base tablet:text-lg desktop:text-lg">
            Enter your credentials to continue
          </h2>
          <h3 className="text-black">Sign up with Email Address</h3>
        </div>

        <form
          className="flex flex-col gap-1 phone:mx-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-2">
            <TextField
              id="signup_fname"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              error={!!errors.firstName}
              onChange={handleChange}
              helperText={errors.firstName}
              required
              sx={{ maxWidth: "180px" }}
              fullWidth
            />
            <TextField
              id="signup_lname"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              error={!!errors.lastName}
              onChange={handleChange}
              helperText={errors.lastName}
              required
              sx={{ maxWidth: "180px" }}
              fullWidth
            />
          </div>
          <TextField
            id="signup_email"
            name="email"
            label="Email"
            value={formData.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange}
            required
            sx={{ maxWidth: "390px" }}
            fullWidth
          />
          <TextField
            id="signup_password"
            name="password"
            label="Password"
            value={formData.password}
            error={!!errors.password}
            onChange={handleChange}
            helperText={errors.password}
            required
            sx={{ maxWidth: "390px" }}
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      size="sm"
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="flex flex-row gap-3">
            <Input
              id="signup_agree"
              name="agreeTerms"
              label="Terms & Conditions"
              type="checkbox"
              aria-checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <p>Agree with Terms & Conditions</p>
          </div>

          <button
            type="submit"
            className="h-10 mt-4 font-semibold text-white bg-purple-600 rounded-md "
          >
            Sign Up
          </button>

          <button className="h-10 mt-4 font-semibold text-black ">
            Already have an account?
          </button>
        </form>
      </div>
    </div>
  );
}
