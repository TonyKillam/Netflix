import React from "react";
import { Button } from "../components/opt-form/styles/opt-form";
import { Footer } from "../components";

export default function Signup() {
  return (
    <>
      <h1 className="text-center">Hello, I'm Signup Page :P</h1>;
      <Button>
        <Footer.Link href="/">Home</Footer.Link>
      </Button>
    </>
  );
}
