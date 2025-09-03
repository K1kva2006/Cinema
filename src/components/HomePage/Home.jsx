import React from "react";

import Header from "./Header.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <div className="homePageContainer">
      <Header />
      <Section1 />
      <Section2 />
      <Footer/>
    </div>
  );
}
