"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import axios from "axios";

const page = () => {
  const messages = [
    {
      id: 1,
      name: "Sunday Messages",
      date: "August 4, 2024",
      title: "God the Holy Spirit and the Lord All Appear when you Testify.",
      scriptures: ["Mt: 23:23"],
      file: "sm.pdf",
    },
    {
      id: 2,
      name: "Wednesday Messages",
      date: "August 7, 2024",
      title: "God the Holy Spirit and the Lord All Appear when you Testify.",
      scriptures: ["Mt: 24:23", "Mt: 25:23"],
      file: "wm.pdf",
    },
  ];
  const handleDownload = async (file) => {
    try {
      const response = await axios.get(`/api/download?message=${file}`, {
        responseType: "blob",
      });

      // Extract filename from content-disposition header
      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      // Setting filename received in response
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <section className="text-[var(--main-color)]">
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
              <button
                className=" min-w-[20.75rem] bg-[var(--main-color)] text-white text-[4rem] font-bold px-14 my-12"
                onClick={() => handleDownload(message.file)}
              >
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
