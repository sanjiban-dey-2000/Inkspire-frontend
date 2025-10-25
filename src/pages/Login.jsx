import React, { useState } from "react";
import { login } from "../services/AxiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData,setLoginData]=useState({
    email:"",
    password:"",
  });

  const navigate=useNavigate();

  const handleFormChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }

  const postLogin=async(data)=>{
    try{
      const res=await login(data);
      console.log(res.data);
      localStorage.setItem("token",res.data?.token);
      localStorage.setItem("id",res.data?.id);
      navigate("/dashboard");
      toast.success("Login successful");
    }catch(error){
      console.log(error.message);
      toast.error("Something went wrong!! Please try again");
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    postLogin(loginData);
    setLoginData({
      email:"",
      password:"",
    });
  }
  

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      
      {/* Left Column - Image/Illustration with Overlay */}
      <div className="hidden md:flex w-2/3 relative rounded-l-3xl overflow-hidden">
        <img
          src="/typing.jpg"
          alt="Illustration"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <h2 className="text-4xl font-extrabold text-white text-center">
            Welcome to Inkspire! <br /> Explore ideas, creativity, and knowledge.
          </h2>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex w-full md:w-1/3 justify-center items-center px-6 py-16">
        <div className="bg-gray-800 p-10 rounded-3xl shadow-xl w-full">
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Login
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Welcome back! Enter your credentials to access your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleFormChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleFormChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition"
            >
              Login
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
