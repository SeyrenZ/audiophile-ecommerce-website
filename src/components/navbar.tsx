"use client";
import React, { useState, useEffect } from "react";
import { CartIcon, Logo } from "./svg";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import ProductLink from "./product-link";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <div className="w-full h-auto absolute z-50 ">
        <div
          className={`absolute w-full h-auto container py-16 left-0 bg-white rounded-b-xl ${
            isOpen
              ? "sm:translate-y-[25%] translate-y-[9.5%] opacity-100"
              : "translate-y-[-100%] opacity-0"
          } transition ease-in-out lg:duration-0 duration-500 z-50`}
        >
          <div onClick={() => setOpen(false)}>
            <ProductLink />
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden block"
            onClick={() => setOpen(false)}
          />
        )}
        <nav
          className={`w-full sm:px-10 pl-2 pr-6 sm:py-8 py-6 max-w-[1110px] ${
            isOpen ? "bg-black" : "bg-transparent"
          } mx-auto border-b-[1px] border-zinc-700 flex items-center justify-between relative z-40`}
        >
          <div className="block lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={20}
            />
          </div>
          <Link
            className="w-[143px] lg:static absolute sm:left-32 sm:right-auto sm:mx-0 right-0 left-0 mx-auto"
            href="/"
          >
            <Logo />
          </Link>
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
    </>
  );
};

export default Navbar;
