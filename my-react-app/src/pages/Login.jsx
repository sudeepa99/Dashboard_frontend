import React from "react";
import logoImg from "../assets/logo.png";
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginValidation from "../validations/LoginValidation";
import { LoginRequest } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = LoginValidation(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log("Submitting login request with:", formData);

        const result = await LoginRequest(formData);
        console.log("Login response:", result);

        const token = result.accessToken;
        const userRole = result.user.roles[0].name;
        console.log(userRole);

        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);

        console.log(token);

        console.log("Login successfull");

        navigate("/dashboard", { state: { role: userRole } });
      } catch (error) {
        console.log("Login error", error);
        setErrors({
          ...errors,
          LoginRequest: error.response
            ? error.response.data.message || "Please try again."
            : "Login in failed, check your network and try again.",
        });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-sky-50">
      <div className="box-content flex flex-col items-center justify-start  bg-white border-2 border-transparent rounded-md  phone:w-[350px] phone:h-[500px] tablet:w-[400px] tablet:h-[500px] desktop:w-[500px] desktop:h-[600px]  ">
        <img
          src={logoImg}
          alt="logo"
          className="p-0 m-0 size-30 phone:size-20 tablet:size-24 desktop:size-32"
        />
        <div className="flex flex-col items-center justify-center gap-3 mb-5 ">
          <h1 className="font-serif font-bold tracking-normal text-purple-600 text-sp phone:text-lg tablet:text-xl desktop:text-2xl ">
            Hi, Welcome Back
          </h1>
          <h2 className="font-medium text-gray-400 phone:text-base tablet:text-lg desktop:text-lg">
            Enter your credentials to login
          </h2>
        </div>

        <form className="flex flex-col gap-1 " onSubmit={handleSubmit}>
          <TextField
            id="login_email"
            label="Email"
            name="email"
            fullWidth
            value={formData.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange}
            sx={{ maxWidth: "390px" }}
          />
          <TextField
            id="login_password"
            label="Password"
            name="password"
            sx={{ maxWidth: "390px" }}
            fullWidth
            type={showPassword ? "text" : "password"}
            value={formData.password}
            error={!!errors.password}
            onChange={handleChange}
            helperText={errors.password}
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
          <div className="flex flex-row text-sm desktop:space-x-36 phone:space-x-10 ">
            <div className="flex flex-row gap-2">
              <Input type="checkbox" />
              <p>Keep Me Logged in</p>
            </div>
            <button type="button" className="font-semibold text-purple-600 ">
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="h-10 mt-6 font-semibold text-white bg-purple-600 rounded-md "
          >
            Sign In
          </button>

          <button
            className="h-10 font-semibold text-black mt-7 "
            onClick={() => navigate("/signup")}
          >
            Don't have an account?
          </button>
        </form>
        {errors.LoginRequest && (
          <div className="mt-4 text-red-500">
            <p>{errors.LoginRequest}</p>
          </div>
        )}
      </div>
    </div>
  );
}
