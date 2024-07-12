import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Container } from "./Container";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export const Projects = () => {
  return (
    <div className="bg-cyan-900 h-[95vh] -skew-y-6 my-16 ">
      <Container>
        <div className="skew-y-6 h-screen ">
          <div className="text-center text-4xl font-light uppercase tracking-[8px] font-mono  my-10 pt-10 ">
            Projects
          </div>
          <div className="grid grid-cols-12  items-center  ">
            <div className="col-span-2 flex justify-end ">
              <IoIosArrowDropleftCircle size={44} className="cursor-pointer" />
            </div>
            <div className="col-span-8 ">
              <ProjectCard />
            </div>
            <div className="col-span-2  w-full flex justify-start ">
              <IoIosArrowDroprightCircle size={35} className="cursor-pointer " />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
