/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";

function NFTCard() {
  return (
    <div className="max-w-[350px]">
      <img src="Rectangle1.png" alt="Rectangle1.png" className="rounded-t-xl" />
      <div className="hero  grid grid-cols-2 backdrop-blur-xl  p-[10px] rounded-b-lg  min-h-[10rem]  border-1 border">
        <div className="flex flex-col items-start justify-center h-full relative">
          <h1 className="font-rajdhani text-lg font-bold">3D Abstract Hand</h1>
          <div className="flex items-center py-2">
            <img src="avatar.png" alt="avatar" />
            <h1 className="px-1">@jhonartist</h1>
          </div>
          <div className="flex font-rajdhani flex-col">
            <h3>Reserve price</h3>
            <h1 className="font-bold">ETH 9.31</h1>
          </div>
        </div>
        <div className="flex flex-col item-end  justify-center">
          <h1>Auction Ends in</h1>
          <div className="grid grid-cols-3 py-1">
            <div className="pr-1">
              <h1 className="font-bold">18</h1>
              <span>Hours</span>
            </div>{" "}
            <div className="px-1">
              <h1 className="font-bold">18</h1>
              <span>Hours</span>
            </div>{" "}
            <div className="pl-1">
              <h1 className="font-bold">18</h1>
              <span>Hours</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-indigo-500  relative via-purple-500 to-pink-500 px-[1.2em] flex-end py-[.7em] rounded-xl">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

function ExploreCollectionsCard() {
  return (
    <div className="max-w-[350px]">
      <img src="unsplashBg.png" alt="unsplashBg" className="" />
      <div className="flex flex-col  items-center bg-white/10 font-rajdhani backdrop-blur min-h-[10rem]">
        <img src="unsplash1.png" alt="unsplashB" width="70" height="70" />
        <div className="flex flex-col py-3 text-center">
          <h1 className="font-bold text-2xl">Jhones Nickey</h1>
          <span className="text-[#FFB1EE]">@jhonartist</span>
        </div>
        {/* <div className="bg-pink-700 w-36 h-36 rounded-full  absolute  -z-10 filter blur-lg opacity-70 "></div> */}
        <style jsx>{`
          .button {
            background: linear-gradient(
              92.23deg,
              #ff56f6 21.43%,
              #b936ee 50.63%,
              #3bace2 100%,
              #406aff 117.04%
            );
            box-shadow: 0px 4.81747px 116.824px rgba(255, 86, 246, 0.51);
            backdrop-filter: blur(231.239px);
          }
        `}</style>
        <button className="button px-[4em] shadow-2xl backdrop-blur-lg font-bold text-xl my-4 rounded-lg py-[.7em]  ">
          Follow
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-white ">
      <NavComponent />
      <Hero />
      <NFTCard />
      <ExploreCollectionsCard />
    </div>
  );
}
