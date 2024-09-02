import React from "react";

const Quiz = () => {
  return (
    <section className="flex items-center flex-col text-[var(--main-color)] ">
      <h1 className="text-[7rem] font-bold my-[3rem] text-center max-[562px]:text-[4rem] ">
        Quiz for the Week
      </h1>
      <h2 className="text-[4rem] text-center mb-11">
        September 1st Holy Spirit Story Quiz
      </h2>
      <p className="text-[2rem] text-center">
        Q: There are two of the greatest blessings that God gives. Ezekiel,
        Daniel, Joshua, and Moses received these blessings. Heroes and patriotic
        martyrs also possessed these two things. Without them, they could not
        have accomplished what they did. What are these two blessings? <br />{" "}
        <br /> This is an event opened by Heaven. We hope you take on the Holy
        Spirit Story Quiz with gratitude and seize this precious opportunity to
        realize the greatest blessings given by God.
      </p>
    </section>
  );
};

export default Quiz;
