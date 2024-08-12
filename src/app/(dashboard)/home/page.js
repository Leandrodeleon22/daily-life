import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import homeImage from "../../../../public/home-image.png";

const page = () => {
  const scriptures = ["Mt 23:23"];
  return (
    <>
      <div className="bg-[url('/home-image.png')] min-h-[50.5rem] text-white flex justify-center items-center">
        <div className="max-w-[80rem]  ">
          <h1 className="font-bold text-[7.5rem]">Sunday Message Title</h1>
          <p className="text-[4.5rem] text-center">
            God the Holy Spirit and the Lord All Appear when you Testify.
          </p>
          {scriptures.map((scripture) => {
            return (
              <p className="text-center italic text-[3rem]">{scripture}</p>
            );
          })}
        </div>
      </div>
      {/* <Image src={homeImage} alt="home-image" className="w-full"/> */}
      <Wrapper>home</Wrapper>
    </>
  );
};

export default page;
