import { Button, TextField } from "@mui/material";
import React from "react";

export default function LoginFormContent(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
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
      <div>
        <p>{props.text}</p>
        <Button size="small">{props.button}</Button>
      </div>
    </div>
  );
}
