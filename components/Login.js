import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoginIn, setIsLoginIn] = useState(true);

  const { login, signup, currentUser } = useAuth();
  console.log(currentUser);

  const submitHandler = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoginIn) {
      try {
        return await login(email, password);
      } catch (err) {
        return setError("Incorrect email or password");
      }
    }
    await signup(email, password);
  };

  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {isLoginIn ? "Login" : "Register"}
      </h1>
      {error && (
        <div className="w-full max-w-[30ch] border-rose-400 border border-solid text-center text-rose-400 py-2">
          {error}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
        className="rounded-full outline-none duration-300 border-b-4 border-solid border-white focus:border-cyan-300 text-slate-900 p-3 w-full max-w-[40ch]"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="rounded-full outline-none duration-300 border-b-4 border-solid border-white focus:border-cyan-300 text-slate-900 p-3 w-full max-w-[40ch]"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[30ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-black"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => {
          setIsLoginIn(!isLoginIn);
          setEmail("");
          setPassword("");
          setError(null);
        }}
      >
        {!isLoginIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}
