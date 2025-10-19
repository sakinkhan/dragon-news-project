import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-2">
        <div className="card-body">
          <p className="font-semibold text-center text-2xl border-b-1 border-[#E7E7E7] pt-3 pb-5 px-8">
            Login your account
          </p>
          <fieldset className="fieldset py-5">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-3">
              Don't have an account? Please{" "}
              <Link
                to={"/auth/register"}
                className="text-secondary hover:underline"
              >
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
