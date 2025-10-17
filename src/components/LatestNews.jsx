import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 font-medium">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
          ad tenetur, sequi sit quae voluptas
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
          ad tenetur, sequi sit quae voluptas
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
          ad tenetur, sequi sit quae voluptas
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
