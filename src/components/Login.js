import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="netflix logo"
        />
      </div>
      <form className="w-3/12 p-10 text-white absolute bg-black mx-auto left-0 right-0 top-40">
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="my-4 p-4 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="my-4 p-4 w-full"
        />
        <button className="mt-4 p-4 bg-red-600 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignupForm}>
          {isSignInForm ? "New to netflix ? SignUp Now" : "Already Signed In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
