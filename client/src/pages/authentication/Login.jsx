import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  })
  const handleInputChange=(e)=>{
    setLoginData({
...loginData,[e.target.name]: e.target.value})
console.log(loginData);
  }
  return (
    <div className="flex items-center justify-center min-w-full min-h-screen  bg-base-200 px-4" data-theme="dark">
      <div className="bg-base-100 p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-base-content">Login to Chatty</h2>

        {/* username Input */}
        <label className="input input-bordered flex items-center gap-3">
          <FaUser className="text-base-content" />
          <input 
            type="text" 
            placeholder="username" name='username' onChange={handleInputChange}
            className="grow text-sm text-base-content placeholder-gray-400"
          />
        </label>

        {/* Password Input */}
        <label className="input input-bordered flex items-center gap-3">
          <TbLockPassword className="text-base-content" />
          <input 
            type="password" 
            placeholder="Password" 
            name='password'
            onChange={handleInputChange}
            className="grow text-sm text-base-content placeholder-gray-400"
          />
        </label>

        {/* Login Button */}
        <button className="btn btn-primary w-full">
          Login
        </button>

        {/* Extra Link */}
        <p className="text-sm text-center text-base-content">
          Don't have an account? <Link to={"/signup"} className="text-primary hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
