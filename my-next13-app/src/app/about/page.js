"use client";
import React from "react";

import Header from "../components/about/Banner";
import Why from "../components/About";
import Intro from "../components/about/Intro";

export default function About() {
  return (
    <main>
      <div className="">
        <Header title="About Us" url="/Images/aboutBanner.webp"/>
      </div>

      <Intro />

      <Why />
    </main>
  );
}
