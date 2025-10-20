import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-3xl font-bold">
        L<span className="loading loading-ring loading-xl"></span>ading
        <span className="loading loading-dots loading-xl mt-2"></span>
      </p>
    </div>
  );
};

export default Loading;
