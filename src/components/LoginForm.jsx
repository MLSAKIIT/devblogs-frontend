
import  React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";


const LoginForm = () => {
  const schema = object({
    email: string()
      .email("must be a valid email")
      .required("email is required"),
    password: string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "enter valid password"
      )
      .required("password is required"),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    //auth logic here.
    // console.log(data);
  };

  return (
    <div className={` px-10 py-10 mt-20 rounded-3xl border-2 border-gray-200`}>
      <h1 className="text-5xl font-semibold">Welcome to Dev Blogs!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your Details
      </p>
      <form className="mt-8 " onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-4">
          <label className="text-lg font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full border-2 border-gray-100 roundex-xl p-4 my-4 bg-transparent rounded-sm"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 mx-4 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Password</label>
          <input
            {...register("password")}
            className="w-full border-2 border-gray-100 roundex-xl p-4 my-4 bg-transparent rounded-sm"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-500 mx-4 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div>
          <button className="font-medium text-base text-primary hover:opacity-75 transition-opacity duration-300">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-primary rounded-xl text-white font-bold text-lg hover:opacity-75 transition-opacity duration-300"
          >
            Sign in
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base"> Don&apos;t have an account?</p>
          <button
            onClick={() => navigate("/register")}
            className="ml-2 font-medium text-base text-violet-500 hover:opacity-75 transition-opacity duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
