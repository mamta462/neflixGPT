import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValiddata } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValiddata(email.current.value, password.current.value);
    setErrorMessage(message);
    // now Sign in sign up
    if (message === null) {
      if (!isSignInForm) {
        //sign up form
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {
              displayName: displayName.current.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                const { uid, email, displayName } = user;
                 dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        //sign in login
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-10 text-white absolute bg-black mx-auto left-0 right-0 top-40"
      >
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={displayName}
            className="my-4 p-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <p className="text-red-500 text-lg p-2">{errorMessage}</p>
        <button
          className="mt-4 p-4 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
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
