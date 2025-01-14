"use client";
import React from "react";

import Header from "../components/contact/Banner";
import Info from "../components/contact/Info";
import Form from "../components/contact/Form";

export default function About() {
  return (
    <main>
      <div className="">
        <Header title="CONTACT US" />
      </div>
      <Form />
      {/* <Info /> */}
    </main>
  );
}
