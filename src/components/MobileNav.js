"use client";

import { deleteCookies } from "@/utils/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";

const MobileNav = () => {
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
    <nav className=" w-full shadow-sm py-5 hidden justify-center max-[832px]:flex ">
      <div className="flex flex-col items-center">
        <form action={deleteCookies} className=" bg flex justify-end">
          <button
            type="submit"
            className="hover:text-green-500 text-[1.5rem] text-green-700"
          >
            Sign out
          </button>
        </form>
        <RxHamburgerMenu className="text-[2.5rem] text-[var(--main-color)] mt-8 mb-2" />
      </div>
    </nav>
  );
};

export default MobileNav;
