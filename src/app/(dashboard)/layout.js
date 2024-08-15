import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
