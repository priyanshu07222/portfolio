import React from "react";
import { GrGithub } from "react-icons/gr";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFfmpeg } from "react-icons/si";
import { Link } from "react-router-dom";

export const ProjectCard = () => {
  return (
    <div>
      <div className="bg-cyan-900 text-black rounded-lg w-3/4 mx-auto h-[65vh] flex flex-col overflow-hidden shadow-lg shadow-black">
        <div className="m-0 bg-red-400">
          <img src="/Captionwriter.png" alt="caption writer" />
        </div>
        <div className="mx-4 my-4">
          <div className="flex gap-4 justify-between items-center text-white">
            <h3 className="text-2xl text-gray-200 font-semibold font-serif ">
              Caption Writer
            </h3>
            <GrGithub size={25} />
          </div>
          <p className="text-md max-w-lg text-slate-200">
            It's a responsive video Caption writer web application, made to make
            caption writing easier. It is made using NextJs, TailwindCss,
            Aceternity ui, & Ffmpeg library.{" "}
          </p>
          <div className="mb-2 mt-4 flex items-center gap-4 text-gray-100" >
            tech stack used: <RiNextjsFill /> <RiTailwindCssFill/> <SiFfmpeg/>
          </div>
        </div>
      </div>
    </div>
  );
};
