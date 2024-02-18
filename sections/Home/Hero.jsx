import VideoToggle from "@/components/VideoToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="home__hero">
      <div className="home__hero-text">
        <h1 className="main__title">
          Unlock your global potential, <br />
          <span className="text__underline">study abroad</span> with ease
        </h1>
        <p className="p__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </p>
      </div>
      <div className="home__hero-btns">
        <Link href="/apply" className="app__btn app__btn-lg">
          Apply now
        </Link>
        <VideoToggle />
      </div>
    </div>
  );
}

export default Hero;
