import React from "react";
import { CartIcon, Logo } from "./svg";
import Link from "next/link";

const Navbar = () => {
  type Link = {
    title: string;
    href: string;
  };

  const links: Link[] = [
    { title: "Home", href: "#" },
    { title: "Headphones", href: "#" },
    { title: "Speakers", href: "#" },
    { title: "Earphones", href: "#" },
  ];
  return (
    <div className="w-full h-auto fixed z-50">
      <nav className="w-full py-8 max-w-[1110px] mx-auto bg-transparent flex items-center justify-between relative">
        <Logo />

        <div className="w-full max-w-[429px] absolute left-0 right-0 mx-auto flex items-center gap-x-[34px]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[13px] leading-[25px] font-medium text-white tracking-[2px] uppercase"
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
