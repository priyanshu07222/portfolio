import React from "react";
import { Container } from "./Container";

export const HeroSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 items-center my-10">
        <div className="">
          <p className="text-5xl font-bold">Hi, I'm</p>
          <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-extrabold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 ">
            Priyanshu Tiwari
          </h1>
          {/* <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold ">
          Priyanshu Tiwari
        </h1> */}
          <p className="my-2 text-xl">Full-stack Developer</p>
        </div>
        <div className="col-span-1 w-3/4 mx-auto">
          <img
            src="pic.jpeg"
            alt="pic"
            className="rounded-full border shadow-md shadow-purple-500"
          />
        </div>
      </div>
    </Container>
  );
};
