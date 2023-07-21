import React from "react";

import loginImg from "../assets/login.png";

function LoginPage() {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-2 px-4">
          <h2 className="text-4xl font-bold text-center py-4">7Code</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>
          <div className="flex justify-between">
            <p>
              <input type="checkbox" />
              Remember Me
            </p>
            <p>Forgot password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
