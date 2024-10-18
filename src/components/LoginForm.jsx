import  React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //auth logic here.
  };

  return (
    <div className={` px-10 py-20 rounded-3xl border-2 border-gray-200`}>
      <h1 className="text-5xl font-semibold">Welcome to Dev Blogs!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your Details
      </p>
      <div className="mt-8 ">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            value={email}
            className="w-full border-2 border-gray-100 roundex-xl p-4 bg-transparent rounded-sm"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            value={password}
            className="w-full border-2 border-gray-100 roundex-xl p-4 bg-transparent rounded-sm"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button className="font-medium text-base text-primary hover:opacity-75 transition-opacity duration-300">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleLogin}
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-primary rounded-xl text-white font-bold text-lg hover:opacity-75 transition-opacity duration-300"
          >
            Sign in
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base"> Don&apos;t have an account?</p>
          <button className="ml-2 font-medium text-base text-violet-500 hover:opacity-75 transition-opacity duration-300">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
