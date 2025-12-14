import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fbf7]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-[380px]">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Create Account
        </h2>

        <input className="input mb-4" placeholder="Full Name" />
        <input className="input mb-4" placeholder="Email" />
        <input className="input mb-4" placeholder="Phone" />
        <input className="input mb-4" placeholder="Phone 2 (Optional)" />
        <input className="input mb-6" placeholder="Password" type="password" />

        <button className="btn-green w-full">Sign Up</button>

        <p className="text-center text-sm mt-5 text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer font-semibold"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
