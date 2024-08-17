import React from "react";
import Wrapper from "@/components/Wrapper";

const page = () => {
  return (
    <Wrapper>
      <section className="min-h-screen text-[var(--main-color)] flex flex-col items-center">
        <h1 className="text-[7rem] font-bold my-16">Quiz for the Week</h1>
        <p className="text-[2rem] text-center w-4/5">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type?
        </p>
      </section>
    </Wrapper>
  );
};

export default page;
