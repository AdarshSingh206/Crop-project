import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fbf7]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-[380px]">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Login
        </h2>

        <input className="input mb-4" placeholder="Name" />
        <input className="input mb-4" placeholder="Phone" />
        <input className="input mb-6" placeholder="Password" type="password" />

        <button className="btn-green w-full">Login</button>

        <p className="text-center text-sm mt-5 text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 cursor-pointer font-semibold"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}


