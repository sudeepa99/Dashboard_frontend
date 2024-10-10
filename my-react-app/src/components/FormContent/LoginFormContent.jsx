import { Button, TextField } from "@mui/material";
import React from "react";
import loginimg from "../../assets/Login.jpg";

export default function LoginFormContent(props) {
  return (
    <div className="grid w-100% h-auto grid-cols-2 mx-16 rounded-lg my-16 border-2 border-cyan-700 ">
      <div>
        <img src={loginimg} alt="login" />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 align-middle rounded-md bg-gradient-to-t from-slate-200 to-cyan-900 ">
        <h1 className="mb-12 text-6xl">{props.heading}</h1>
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label={props.label1}
        />
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label={props.label2}
        />
        <Button variant="contained" size="medium">
          {props.submitButton}
        </Button>
        <div className="flex flex-row gap-2">
          <p>{props.text}</p>
          <Button size="small" onClick={props.onClick}>
            {props.button}
          </Button>
        </div>
      </div>
    </div>
  );
}
