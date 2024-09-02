import PrayerCondition from "@/components/PrayerCondition";
import Quiz from "@/components/Quiz";
import Wrapper from "@/components/Wrapper";
// import Image from "next/image";
import React from "react";
// import homeImage from "../../../../public/home-image.png";

const page = () => {
  const scriptures = [
    {
      id: 1,
      name: [
        "1 Corinthians 6:19",
        "Habakuk 2:20",
        "Psalms 99:1-9",
        "John 2:21>",
        "1 Corinthians 3:16",
        "2 Corinthians 6:16",
        "Revelation 21:2",
        "Revelation 21:22>",
      ],
    },
  ];
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/da8jnpdza/image/upload/v1723424536/home-image_iqf8bu.png')] min-h-[50.5rem] text-white flex justify-center items-center">
        <div className="max-w-[80rem] flex flex-col items-center  my-[5rem]">
          <h1 className="font-bold text-[7.5rem] text-center max-[832px]:text-[6.5rem]   max-[562px]:text-[5rem] px-8">
            Sunday Message Title
          </h1>
          <p className="text-[4.5rem] text-center max-[832px]:text-[4rem] w-5/6 max-[562px]:text-[3rem]">
            God works appearing through the temple that symbolizes God.
          </p>

          {scriptures.map((scripture) => {
            return (
              <p
                key={scripture.id}
                className={`text-center italic text-[3rem]  mt-8 max-[562px]:text-[2rem] ${
                  scripture.name.length > 4 ? "grid grid-cols-2 gap-x-14 " : ""
                }`}
              >
                {scripture.name.map((script) => (
                  <span className="block" key={script}>
                    {script}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </div>

      <Wrapper>
        <PrayerCondition />
        <Quiz />
      </Wrapper>
    </>
  );
};

export default page;
