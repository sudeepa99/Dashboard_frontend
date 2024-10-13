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
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
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

        <form className="flex flex-col gap-1 phone:mx-5">
          <div className="flex flex-row gap-2">
            <TextField
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="First Name"
              required
              sx={{ maxWidth: "180px" }}
              fullWidth
            />
            <TextField
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="Last Name"
              required
              sx={{ maxWidth: "180px" }}
              fullWidth
            />
          </div>
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
            required
            sx={{ maxWidth: "390px" }}
            fullWidth
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Password"
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
            <Input type="checkbox" required />
            {/* <span onClick={handleIconClick}>
              <FontAwesomeIcon icon={faSquareCheck} />
            </span> */}

            <p>Agree with Terms & Conditions</p>
          </div>

          <button className="h-10 mt-4 font-semibold text-white bg-purple-600 rounded-md ">
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
