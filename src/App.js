import React from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import "normalize.css";
import FooterContainer from "./containers/footer";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
