import React from "react";

const PrayerCondition = () => {
  const prayerTitles = [
    {
      id: 1,
      title:
        "and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic ",
    },
    {
      id: 2,
      title:
        "and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic ",
    },
    {
      id: 3,
      title:
        "and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic ",
    },
  ];

  return (
    <section className="flex items-center flex-col text-[var(--main-color)] ">
      <h1 className="text-[7rem] font-bold my-[3rem] text-center max-[562px]:text-[4rem]">
        75-Day Prayer Condition
      </h1>
      <ol className="text-[2rem]">
        {prayerTitles.map((list) => {
          return <li key={list.id}>{`${list.id}. ${list.title}`}</li>;
        })}
      </ol>
    </section>
  );
};

export default PrayerCondition;
