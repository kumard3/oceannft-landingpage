import React from "react";

export default function TopSellers() {
  return (
    <div>
      <div className="text-center py-10 flex justify-center items-center flex-col">
        <h1 className="font-orbitron text-5xl font-bold py-10">
          Top Sellers this Month{" "}
        </h1>
        <p className="font-mono max-w-xl ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim minim mollit.
        </p>
      </div>
      <div className="">
        <div className="flex items-center">
          <img src="avatar.png" />
          <div className="flex flex-col">

          <h1>Eleanor Pena</h1>
          <p>74875</p>
          </div>
        </div>
      </div>
    </div>
  );
}
