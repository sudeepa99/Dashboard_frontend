import { Button, TextField } from "@mui/material";
import React from "react";

export default function LoginFormContent(props) {
  return (
    <div className="flex flex-col justify-center align-middle items-center h-screen w-auto   gap-5 border-2 border-cyan-700 mx-64 ">
      <h1 className="text-6xl mb-8">{props.heading}</h1>
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
      <div className="flex gap-2 flex-row">
        <p>{props.text}</p>
        <Button size="small">{props.button}</Button>
      </div>
    </div>
  );
}
