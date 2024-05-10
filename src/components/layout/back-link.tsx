import Link from "next/link";
import React from "react";

interface Link {
  link: string;
}

const GoBackLink: React.FC<Link> = ({ link }) => {
  return (
    <div className="w-full container">
      <div className="w-full max-w-[1110px] mx-auto items-start">
        <Link
          href={link}
          className="text-[15px] leading-[25px] font-normal text-zinc-500 hover:underline"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default GoBackLink;
