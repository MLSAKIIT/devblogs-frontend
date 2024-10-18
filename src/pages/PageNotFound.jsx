import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center bg-background h-screen">
      <h4 className="text-7xl font-extrabold mb-4">404</h4>
      <p className="text-lg mb-6">
        We can not seem to find the page you are looking for.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-primary-dark transition-all"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
