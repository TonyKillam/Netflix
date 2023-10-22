import React from "react";
import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="/">FAQ</Footer.Link>
          <Footer.Link href="/">Investor Relations</Footer.Link>
          <Footer.Link href="/">Ways to Watch</Footer.Link>
          <Footer.Link href="/">Corporate Information</Footer.Link>
          <Footer.Link href="/">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="/browse">Help Centre</Footer.Link>
          <Footer.Link href="/browse">Jobs</Footer.Link>
          <Footer.Link href="/browse">Terms of Use</Footer.Link>
          <Footer.Link href="/browse">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="/signin">Account</Footer.Link>
          <Footer.Link href="/signin">Redeem gift cards</Footer.Link>
          <Footer.Link href="/signin">Privacy</Footer.Link>
          <Footer.Link href="/signin">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="/signup">Media Centre</Footer.Link>
          <Footer.Link href="/signup">Buy gift cards</Footer.Link>
          <Footer.Link href="/signup">Cookie Preferences</Footer.Link>
          <Footer.Link href="/signup">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
