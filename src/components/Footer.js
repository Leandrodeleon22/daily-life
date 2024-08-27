import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-[var(--main-color)] text-white min-h-[5rem] flex items-center mt-[7rem] py-4">
      <Wrapper>
        <div className="flex w-full justify-between text-[1.7rem] max-[542px]:flex-col-reverse text-center">
          <p>@2024lean</p>
          <p>Contact us: leandrodeleon22@gmail.com</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
