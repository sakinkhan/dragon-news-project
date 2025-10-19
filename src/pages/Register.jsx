import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-2">
        <div className="card-body">
          <p className="font-semibold text-center text-2xl border-b-1 border-[#E7E7E7] pt-3 pb-5 px-8">
            Register your account
          </p>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset py-5">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                required
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Enter your Photo URL"
                required
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <label className="label">
                  <input type="checkbox" className="checkbox" />
                  Accept{" "}
                  <span className="font-semibold">Term & Conditions</span>
                </label>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center pt-3">
                Already have an account? Please{" "}
                <Link
                  to={"/auth/login"}
                  className="text-secondary hover:underline"
                >
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
