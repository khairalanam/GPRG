import React from "react";

const Loader = (): React.JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-24 h-24 border-t-8 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
