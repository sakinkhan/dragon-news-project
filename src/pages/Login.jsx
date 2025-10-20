import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn } = use(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMsg = error.code;
        setError(errorMsg);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-2">
        <div className="card-body">
          <p className="font-semibold text-center text-2xl border-b-1 border-[#E7E7E7] pt-3 pb-5 px-8">
            Login your account
          </p>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset py-5">
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && (
                <p className="text-red-500 font-semibold text-center">
                  {error}
                </p>
              )}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
