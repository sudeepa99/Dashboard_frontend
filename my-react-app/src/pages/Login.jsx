import React from "react";
import logoImg from "../assets/logo.png";
import { Button, TextField } from "@mui/material";

export default function Login() {
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

        <form className="flex flex-col gap-1 phone:mx-5">
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
            fullWidth
            sx={{ maxWidth: "390px" }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Password"
            sx={{ maxWidth: "390px" }}
            fullWidth
          />
          <div className="flex flex-row text-sm desktop:space-x-40 phone:space-x-10 ">
            <p>Keep Me Logged in</p>
            <button className="font-semibold text-purple-600 ">
              Forgot Password?
            </button>
          </div>
          <button className="h-10 mt-6 font-semibold text-white bg-purple-600 rounded-md ">
            Sign In
          </button>

          <button className="h-10 font-semibold text-black mt-7 ">
            Don't have an account?
          </button>
        </form>
      </div>
    </div>
  );
}
