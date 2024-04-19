"use client";
import React, { useState } from "react";
import { CartIcon, Logo } from "./svg";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  type Link = {
    title: string;
    href: string;
  };

  const links: Link[] = [
    { title: "Home", href: "/" },
    { title: "Headphones", href: "/headphones" },
    { title: "Speakers", href: "#" },
    { title: "Earphones", href: "#" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full h-auto sm:px-10 absolute z-50 backdrop-blur-sm">
      <nav className="w-full sm:px-0 pl-2 pr-6 sm:py-8 py-6 max-w-[1110px] mx-auto bg-transparent border-b-[1px] border-zinc-700 flex items-center justify-between relative">
        <div className="block lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FFFFFF"
            size={20}
          />
        </div>
        <Logo className="lg:static absolute sm:left-20 sm:right-auto sm:mx-0 left-0 right-0 mx-auto" />
        <div className="w-full max-w-[429px] absolute left-0 right-0 mx-auto lg:flex hidden items-center gap-x-[34px]  ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[13px] leading-[25px] font-medium text-white hover:text-primary-copper tracking-[2px] uppercase transition ease-in-out duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <CartIcon />
      </nav>
    </div>
  );
};

export default Navbar;
