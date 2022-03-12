/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";

export default function Home() {
  return (
    <div className="text-white ">
    <NavComponent />
    <Hero />
    </div>
  );
}
