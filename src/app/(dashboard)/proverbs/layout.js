import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  const week = [
    { id: 1, name: "Monday", link: "/proverbs" },
    { id: 2, name: "Tuesday", link: "/proverbs/tuesday" },
    { id: 3, name: "Wednesday", link: "/proverbs/wednesday" },
    { id: 4, name: "Thursday", link: "/proverbs/thursday" },
    { id: 5, name: "Friday", link: "/proverbs/friday" },
    { id: 6, name: "Friday", link: "/proverbs/saturday" },
  ];

  return (
    <Wrapper>
      <div className="flex justify-around text-[2rem] text-[var(--secondary-color)] my-16">
        {week.map((day) => {
          return (
            <Link key={day.id} href={day.link} className="">
              {day.name}
            </Link>
          );
        })}
      </div>

      {children}
    </Wrapper>
  );
};

export default layout;
