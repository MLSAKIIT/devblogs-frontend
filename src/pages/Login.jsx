import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full mt-20 flex items-center justify-center ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
