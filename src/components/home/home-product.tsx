import React from "react";
import ZX9SpeakerCard from "./zx9-speaker-card";
import ZX7SpeakerCard from "./zx7-speaker-card";
import YX1EarphonesCard from "./yx1-earphones";

const HomeProduct = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-12 sm:gap-y-[32px] gap-y-6">
        <ZX9SpeakerCard />
        <ZX7SpeakerCard />
        <YX1EarphonesCard />
      </div>
    </div>
  );
};

export default HomeProduct;
