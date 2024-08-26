"use client";

import { deleteCookies } from "@/utils/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useEffect } from "react";
import { useStore } from "@/utils/store";

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

  const { showMobileNav, toggleMobileNav } = useStore();

  console.log(showMobileNav);

  const handleClick = () => {
    toggleMobileNav(!showMobileNav);
  };

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileNav]);

  return (
    <nav
      className={` z-0 w-full shadow-sm py-5 hidden justify-center max-[832px]:flex bg-slate-50 flex-col ${
        showMobileNav ? "fixed top-0" : ""
      } `}
    >
      <div className="flex flex-col items-center ]">
        <form action={deleteCookies} className=" bg flex justify-end">
          <button
            type="submit"
            className="hover:text-green-500 text-[1.5rem] text-green-700"
          >
            Sign out
          </button>
        </form>
        <RxHamburgerMenu
          className="cursor-pointer text-[2.5rem] text-[var(--main-color)] mt-8 mb-2"
          onClick={handleClick}
        />
      </div>

      {showMobileNav ? (
        <div className=" bg-slate-100 flex flex-col items-center h-screen pt-[9rem] mt-5 text-[2rem] ]">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={handleClick}
              className="mb-[2rem]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default MobileNav;
