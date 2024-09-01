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
        The End is Strong!! Special Prayer
      </h1>
      <p className="text-[2.25rem] text-center mb-10">
        The decision in the second trial has been extended by one more week. We
        recognize that God works more powerfully at the end. During this
        critical time, we ask all Providence members to unite in heart and
        participate in the "The End is Strong!! Special Prayer" for Providence
        and SSN.
      </p>
      <p className="text-[2rem] text-left w-full">
        1. <strong>Duration</strong> 9days
      </p>

      <p className="text-[2rem]">
        2. <strong>Method</strong> Prayer at 4 AM and continuous prayer
        throughout the day (Recommended: Full participation in predawn prayer,
        Friday prayer meetings, united prayer during Sunday service, and
        Wednesday service)
      </p>

      <p className="text-[2rem] text-left w-full">
        3. <strong>Prayer Topics:</strong>
      </p>

      <ol className="text-[2rem]">
        {prayerTitles.map((list) => {
          return <li key={list.id}>{`${list.id}. ${list.title}`}</li>;
        })}
      </ol>
    </section>
  );
};

export default PrayerCondition;
