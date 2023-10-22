import React from "react";
import { Button } from "../components/opt-form/styles/opt-form";
import { Footer } from "../components";

export default function Signin() {
  return (
    <>
      <h1 className="text-center">Hello, I'm Signin Page :P</h1>;
      <Button>
        <Footer.Link href="/">Home</Footer.Link>
      </Button>
    </>
  );
}
