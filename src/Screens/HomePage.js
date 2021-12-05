import React from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { footerData } from "../components/Footer/data";

export default function HomePage() {
  return (
    <>
      <Body />
      <Footer heading="Choose your favorite" footerData={footerData} />
    </>
  );
}
