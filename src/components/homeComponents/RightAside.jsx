import React from "react";
import SocialLogins from "./SocialLogins";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import AdContainer from "./AdContainer";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogins></SocialLogins>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <AdContainer></AdContainer>
    </div>
  );
};

export default RightAside;
