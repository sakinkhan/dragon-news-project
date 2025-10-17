import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <p className="font-semibold mb-5 text-[18px]">Q-Zone</p>
      <div className="space-y-5">
        <img src={swimmingImg} alt="swimmingImg" />
        <img src={classImg} alt="swimmingImg" />
        <img src={playgroundImg} alt="swimmingImg" />
      </div>
    </div>
  );
};

export default Qzone;
