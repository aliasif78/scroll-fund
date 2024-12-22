import React from "react";

const page = ({ params }) => {
  return <div className="text-8xl">{params.username}</div>;
};

export default page;
