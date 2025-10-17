import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <p className="font-semibold mb-5 text-[18px]">Find Us On</p>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item gap-3">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item gap-3">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item gap-3">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
