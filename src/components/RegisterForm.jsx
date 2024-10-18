import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    //auth logic here.
  };

  return (
    <div className={` px-10 py-10 rounded-3xl border-2 mt-20 border-gray-200`}>
      <h1 className="text-5xl font-semibold">Welcome to Dev Blogs!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your Details
      </p>
      <div className="mt-8 ">
        <div>
          <label className="text-lg font-medium">Username</label>
          <input
            value={userName}
            className="w-full border-2 border-gray-100 roundex-xl p-4 bg-transparent rounded-sm"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Please enter a username"
          />
        </div>
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
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleRegister}
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-primary rounded-xl text-white font-bold text-lg hover:opacity-75 transition-opacity duration-300"
          >
            Register
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base"> Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="ml-2 font-medium text-base text-violet-500 hover:opacity-75 transition-opacity duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
