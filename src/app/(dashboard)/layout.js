import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <MobileNav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
