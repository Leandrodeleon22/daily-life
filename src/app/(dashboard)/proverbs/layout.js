"use client";

import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }) => {
  const week = [
    { id: 1, name: "Monday", link: "/proverbs" },
    { id: 2, name: "Tuesday", link: "/proverbs/tuesday" },
    { id: 3, name: "Wednesday", link: "/proverbs/wednesday" },
    { id: 4, name: "Thursday", link: "/proverbs/thursday" },
    { id: 5, name: "Friday", link: "/proverbs/friday" },
    { id: 6, name: "Saturday", link: "/proverbs/saturday" },
  ];

  const pathname = usePathname();

  return (
    <Wrapper>
      <div
        className={
          "flex justify-around text-[2rem] text-[var(--secondary-color)] my-16"
        }
      >
        {week.map((day) => {
          return (
            <Link
              key={day.id}
              href={day.link}
              className={`px-4 hover:text-green-500 ${
                day.link === pathname ? "activeLink hover:text-white" : ""
              }`}
            >
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
