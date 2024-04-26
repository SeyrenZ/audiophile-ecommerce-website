import React from "react";
import { FacebookIcon, InstagramIcon, Logo, TwitterIcon } from "../svg";
import Link from "next/link";

const Footer = () => {
  type Link = {
    title: string;
    href: string;
  };

  const links: Link[] = [
    { title: "Home", href: "/" },
    { title: "Headphones", href: "/headphones" },
    { title: "Speakers", href: "/speakers" },
    { title: "Earphones", href: "/earphones" },
  ];

  return (
    <div className="w-full lg:h-[365px] sm:h-[400px] h-[654px] sm:px-10 px-6 mt-[200px] bg-primary-darkCharcoal">
      <div className="w-full h-full sm:pt-20 pt-14 max-w-[1110px] mx-auto flex flex-col gap-y-[36px] relative">
        <div className="w-[101px] h-[4px] bg-primary-copper absolute left-0 right-0 sm:mx-0 mx-auto top-0" />
        <div className="w-full flex lg:flex-row flex-col lg:items-center sm:items-start items-center lg:justify-between lg:gap-y-0 gap-y-[36px]">
          <Link href="#">
            <Logo />
          </Link>
          <div className="w-full max-w-[429px] flex sm:flex-row flex-col items-center gap-x-[34px] sm:gap-y-0 gap-y-5">
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
        </div>
        <div className="w-full h-auto flex items-end justify-between">
          <div className="text-[15px] leading-[25px] text-zinc-500 font-medium sm:text-left text-center">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team
            <br className="lg:block hidden" /> of music lovers and sound
            specialists who are devoted to helping you get the
            <br className="lg:block hidden" /> most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7
            <br className="lg:block hidden" /> days a week.
          </div>
          <div className="w-fit gap-x-4 lg:flex items-center hidden">
            <Link
              href=""
              className="text-white hover:text-primary-copper transition ease-in-out duration-300"
            >
              <FacebookIcon />
            </Link>
            <Link
              href=""
              className="text-white hover:text-primary-copper transition ease-in-out duration-300"
            >
              <TwitterIcon />
            </Link>
            <Link
              href=""
              className="text-white hover:text-primary-copper transition ease-in-out duration-300"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <div className="w-full mt-4 flex sm:flex-row flex-col sm:items-end items-center sm:justify-between sm:gap-y-0 gap-y-10">
          <div className="text-[15px] leading-[25px] font-bold text-zinc-500">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </div>
          <div className="w-fit gap-x-4 flex items-center lg:hidden">
            <Link
              href=""
              className="text-white hover:text-primary-copper transition ease-in-out duration-300"
            >
              <FacebookIcon />
            </Link>
            <Link
              href=""
              className="text-white hover:text-primary-copper transition ease-in-out duration-300"
            >
              <TwitterIcon />
            </Link>
            <Link
              href=""
              className="text-white hover:text-primary-copper transition ease-in-out duration-300"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
