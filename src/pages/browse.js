import React from "react";
import { Button } from "../components/opt-form/styles/opt-form";
import { Footer } from "../components";

export default function Browse() {
  return (
    <>
      <h1 className="text-center">Hello, I'm Browsing Netflix here :P</h1>;
      <Button>
        <Footer.Link href="/">Home</Footer.Link>
      </Button>
    </>
  );
}
