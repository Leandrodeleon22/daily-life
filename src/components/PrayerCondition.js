import React from "react";

const PrayerCondition = () => {
  const prayerTitles = [
    {
      id: 1,
      title: "For Providence and SSN",
    },
    {
      id: 2,
      title: "For a fair trial ",
    },
    {
      id: 3,
      title: "For unity and harmony within Providence",
    },
    {
      id: 4,
      title: " For lives to be further strengthened amidst the trials.",
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
        participate in the &quot;The End is Strong!! Special Prayer&quot; for
        Providence and SSN.
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

      <ol className="text-[2rem] ml-40 mr-[5rem] w-full">
        {prayerTitles.map((list) => {
          return <li key={list.id}>{`${list.id}. ${list.title}`}</li>;
        })}
      </ol>
    </section>
  );
};

export default PrayerCondition;
