import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  const lists = [
    {
      id: 1,
      message:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
    {
      id: 2,
      message:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
    {
      id: 3,
      message:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
  ];

  return (
    <Wrapper>
      <section className="min-h-screen text-[var(--main-color)] flex flex-col items-center">
        <h1 className="text-[7rem] font-bold my-16">75-Day Prayer Condition</h1>

        <ol className="text-[2rem]">
          {lists.map((list) => (
            <li
              key={list.id}
              className="mb-6"
            >{`${list.id}. ${list.message}`}</li>
          ))}
        </ol>
      </section>
    </Wrapper>
  );
};

export default page;
