import React from "react";
import LoginFormContent from "../components/FormContent/LoginFormContent";

export default function Login(props) {
  return (
    <div>
      <form>
        <LoginFormContent
          heading="Login"
          label1="Email"
          label2="Password"
          submitButton="Login"
          text="Dont have an account?"
          button="Signup"
        />
      </form>
    </div>
  );
}
