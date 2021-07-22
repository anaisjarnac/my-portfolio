
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Main(props) {

  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;