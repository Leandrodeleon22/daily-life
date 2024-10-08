"use client";

import { deleteCookies } from "@/utils/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Nav = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/home",
    },
    {
      id: 2,
      name: "Messages",
      href: "/messages",
    },
    {
      id: 3,
      name: "Proverbs",
      href: "/proverbs",
    },
    {
      id: 4,
      name: "Providence Events",
      href: "/providence-events",
    },
    {
      id: 5,
      name: "Providence Quiz",
      href: "/providence-quiz",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className=" bg-slate-50 w-full shadow-sm py-5 max-[832px]:hidden">
      <form action={deleteCookies} className=" bg flex justify-end">
        <button
          type="submit"
          className="hover:text-green-500 pr-10 text-[1.5rem] text-green-700"
        >
          Sign out
        </button>
      </form>
      <div className=" w-4/5 mx-auto flex justify-between text-[2rem] text-[var(--main-color)]  ">
        {links.map((link) => {
          return (
            <Link
              className={`hover:text-green-500 px-4  ${
                pathname === link.href || pathname.includes(link.href)
                  ? "activeLink hover:text-white"
                  : ""
              } `}
              key={link.id}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
