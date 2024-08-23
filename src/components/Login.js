import { useRef, useState } from "react";
import { BG_URL } from "../utils/constants.js";
import Header from "./Header.js";
import { formValidate } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const validation = () => {
    const message = formValidate(
      name.current.value,
      email.current.value,
      password.current.value,
      isSignUpForm
    );
    setErrMsg(message);
    if (message) return;
    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode+'-'+errorMessage);
        });
    }
  };

  const handleSignOrSignUp = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  return (
    <div className="flex justify-center bg-black">
      <div className="h-screen w-full relative">
        <Header />
        <img
          src={BG_URL}
          alt="bg-image"
          className=" z-0 top-0 left-0 absolute brightness-50 h-screen w-screen object-cover"
        />

        <div className="absolute left-1/2 z-10 mt-20 px-14 -translate-x-1/2 h-fit rounded-md">
          <div className="p-16 w-[450px] relative before:bg-black before:absolute before:w-[450px] before:h-full before:left-0 before:opacity-75 before:top-0 before:rounded-md">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="text-white flex flex-col gap-4 relative z-40"
            >
              <h1 className="text-[2rem] font-bold">
                {isSignUpForm ? "Sign Up" : "Sign In"}
              </h1>
              {isSignUpForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="py-3 px-2 bg-transparent border-gray-500 border-2 rounded-sm"
                />
              )}
              {/* {ErrMsg === "name" && (
                <p className="text-sm text-red-500 pl-2">
                  Name should be letters only and atleast 4 characters.
                </p>
              )} */}
              <input
                ref={email}
                type="text"
                placeholder="Email or mobile number"
                className="py-3 px-2 bg-transparent border-gray-500 border-2 rounded-sm"
              />
              {/* {ErrMsg === "emailID" && (
                <p className="text-sm text-red-500 pl-2">
                  Email Id is not valid.
                </p>
              )} */}
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="py-3 px-2 bg-transparent border-gray-500 border-2 rounded-sm cursor-pointer"
              />
              {ErrMsg && (
                <p className="text-sm text-red-500 pl-2">
                  {ErrMsg}
                </p>
              )}
              <button
                onClick={validation}
                type="submit"
                className="bg-red-600 py-2 rounded-sm font-medium"
              >
                {isSignUpForm ? "Sign up" : "Sign In"}
              </button>
              <p className="text-center text-zinc-300">OR</p>
              <div className="flex justify-center cursor-pointer before:w-full before:h-full before:bg-zinc-400 before:absolute before:opacity-30 relative before:rounded-sm before:hover:opacity-20">
                <button className="py-2 text-center text-white relative font-semibold">
                  Use a sign-in code
                </button>
              </div>
              <p className=" hover:underline hover:text-zinc-300 cursor-pointer text-center">
                Forgot password?
              </p>
            </form>

            <div className="relative flex gap-5 flex-col">
              <form className="text-white z-50 flex align-middle">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="w-4 text-white"
                />
                <label className="ml-3">Remember me</label>
              </form>
              <p>
                <span className="text-zinc-400">New to Netflix? </span>
                <button
                  onClick={handleSignOrSignUp}
                  className="text-white font-semibold hover:underline cursor-pointer"
                >
                  {isSignUpForm ? "Sign In now" : "Sign up now"}
                </button>
              </p>
              <p className="text-xs text-zinc-400">
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                </span>
                <span className="text-blue-500 hover:underline cursor-pointer">
                  Learn more
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
