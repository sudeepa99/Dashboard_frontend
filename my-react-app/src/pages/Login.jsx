import React from "react";
import LoginFormContent from "../components/FormContent/LoginFormContent";

export default function Login(props) {
  return (
    <div>
      <form>
        <LoginFormContent
          heading="Login"
          label1="Name"
          label2="Password"
          submitButton="Login"
          button="Signup"
        />
      </form>
    </div>
  );
}
