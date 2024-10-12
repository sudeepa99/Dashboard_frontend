import React from "react";

import { Button, TextField } from "@mui/material";

export default function Signup() {
  return (
    <div className="grid w-100% h-auto grid-cols-2 mx-16 rounded-lg my-16 border-2 border-cyan-700 ">
      <div>{/* <img src={signupimg} alt="signup" /> */}</div>
      <div className="flex flex-col items-center justify-center gap-3 align-middle rounded-md bg-gradient-to-t from-slate-200 to-cyan-900 ">
        <h1 className="mb-12 text-6xl">Signup</h1>
        <form className="flex flex-col gap-3">
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Name"
          />
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
          <Button variant="contained" size="medium">
            Signup
          </Button>
          <div className="flex flex-row gap-2">
            <p>If you have Already an account</p>
            <Button size="small">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
