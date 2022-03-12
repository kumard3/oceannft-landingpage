/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import ExploreCollections from "../components/ExploreCollections";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";
import TopNft from "../components/TopNft";

export default function Home() {
  return (
    <div className="text-white ">
      <NavComponent />
      <Hero />
      <TopNft />
      <ExploreCollections />
    </div>
  );
}
