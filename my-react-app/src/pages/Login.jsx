import React from "react";
import logoImg from "../assets/logo.png";
import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="bg-sky-200 ">
      <div className="flex flex-col items-center justify-center h-screen bg-white border-2 rounded-md">
        <img
          src={logoImg}
          alt="logo"
          className="p-0 m-0 size-30 phone:size-20 tablet:size-24 desktop:size-32"
        />
        <div className="flex flex-col items-center justify-center gap-3 mb-5">
          <h1 className="font-bold tracking-wide text-purple-600 text-sp phone:text-lg tablet:text-xl desktop:text-xl ">
            Hi, Welcome Back
          </h1>
          <h2 className="font-medium text-gray-400 phone:text-base tablet:text-lg desktop:text-lg">
            Enter your credentials to login
          </h2>
        </div>

        <form className="flex flex-col gap-2">
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Password"
          />
          <div className="flex flex-row text-base space-x-14 ">
            <p>Keep Me Logged in</p>
            <button className="text-purple-600">Forget Password?</button>
          </div>
          <Button variant="contained" className="bg-purple-600" size="medium">
            Login
          </Button>

          <Button size="small ">Don't have an account?</Button>
        </form>
      </div>
    </div>
  );
}
