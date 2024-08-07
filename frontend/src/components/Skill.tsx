import React from "react";
import { Card } from "./Card";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { Container } from "./Container";
import {
  SiCloudflareworkers,
  SiExpress,
  SiHono,
  SiMongoose,
  SiPostgresql,
} from "react-icons/si";

export const Skill = () => {
  return (
    <div className="bg-black drop-shadow-2xl h-[50vh] overflow-hidden my-10">
      <Container>
        <div className="py-8">
          <h2 className="text-center text-4xl font-light uppercase tracking-[8px] font-mono ">Skills</h2>
          <div className="flex flex-col py-8 gap-8 overflow-hidden whitespace-nowrap  rounded-full">
            <div className="inline-flex animate-scrollLeft space-x-4">
              <Card>
                <RiHtml5Fill className="text-7xl" />
              </Card>
              <Card>
                <RiCss3Fill className="text-7xl" />
              </Card>
              <Card>
                <RiJavascriptFill className="text-7xl" />
              </Card>
              <Card>
                <RiReactjsFill className="text-7xl" />
              </Card>
              <Card>
                <RiNextjsFill className="text-7xl" />
              </Card>
              <Card>
                <RiTailwindCssFill className="text-7xl" />
              </Card>
              {/* ---- */}
      
              <Card>
                <RiNodejsFill className="text-7xl" />
              </Card>
              <Card>
                <SiExpress className="text-7xl" />
              </Card>
              <Card>
                <SiPostgresql className="text-7xl" />
              </Card>
              <Card>
                <SiCloudflareworkers className="text-7xl" />
              </Card>
              <Card>
                <SiHono className="text-7xl" />
              </Card>
              <Card>
                <SiMongoose className="text-7xl" />
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
