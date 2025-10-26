import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("you logged out successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-between items-center relative">
      <div className="left"></div>
      <div className="nav flex items-center gap-5 text-accent text-[18px] absolute left-1/2 -translate-x-1/2">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <img
          className="w-12 rounded-full border-3 border-gray-400 cursor-pointer"
          src={`${user ? user.photoURL : userImg}`}
          alt="userImg"
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-10 font-semibold text-[20px]"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-primary px-10 font-semibold text-[20px]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
