import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  const messages = [
    {
      id: 1,
      name: "Sunday Messages",
      date: "August 4, 2024",
      title: "God the Holy Spirit and the Lord All Appear when you Testify.",
      scriptures: ["Mt: 23:23"],
      link: "",
    },
    {
      id: 2,
      name: "Wednesday Messages",
      date: "August 7, 2024",
      title: "God the Holy Spirit and the Lord All Appear when you Testify.",
      scriptures: ["Mt: 24:23", "Mt: 25:23"],
      link: "",
    },
  ];

  return (
    <Wrapper>
      <section className="mt-28">
        {messages.map((message, index) => {
          return (
            <div
              key={message.id}
              className={`w-3/4  ${
                messages.length - 1 !== index ? "border-b-[.25rem]" : ""
              }`}
            >
              <h1 className="text-[7rem] font-bold mt-20">{message.name}</h1>
              <span className="text-[2rem] italic">{message.date}</span>
              <p className="text-[5rem]">{message.title}</p>
              {message.scriptures.map((scripture) => (
                <p key={scripture} className="text-[4rem]">
                  {scripture}
                </p>
              ))}
              <button className=" min-w-[20.75rem] bg-[var(--main-color)] text-white text-[4rem] font-bold px-14 my-12">
                Download
              </button>

              {/* {messages.length - 1 === index ? (
                ""
              ) : (
                <hr className="text-red-500" />
              )} */}
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default page;
