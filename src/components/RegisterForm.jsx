import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const RegisterForm = () => {
  // Define the validation schema using Yup
  const schema = Yup.object().shape({
    userName: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
    email: Yup.string().email("Must be a valid email").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, and one number"
      )
      .required("Password is required"),
  });

  const navigate = useNavigate();

  // Use react-hook-form and connect to yup schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Registration logic (to be implemented)
  const handleRegister = (data) => {
    console.log(data); // Replace with actual registration logic
  };

  return (
    <div className="px-10 py-10 rounded-3xl border-2 mt-20 border-gray-200">
      <h1 className="text-5xl font-semibold">Welcome to Dev Blogs!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your Details
      </p>
      <form className="mt-8" onSubmit={handleSubmit(handleRegister)}>
        <div>
          <label className="text-lg font-medium">Username</label>
          <input
            {...register("userName")}
            className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent"
            type="text"
            placeholder="Please enter a username"
          />
          {errors.userName && (
            <span className="text-red-500 mx-4 text-sm">
              {errors.userName.message}
            </span>
          )}
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 mx-4 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            {...register("password")}
            className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-500 mx-4 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-primary rounded-xl text-white font-bold text-lg hover:opacity-75 transition-opacity duration-300"
          >
            Register
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Already have an account?</p>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="ml-2 font-medium text-base text-violet-500 hover:opacity-75 transition-opacity duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
