import React from "react"

import { EXPERIENCES } from "../../data/experiences"
import { Panel, PanelDescription, PanelHeader, PanelTitle } from "../panel"
import { ExperienceItem } from "./experience-item"

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
        <PanelDescription>
          My professional journey in blockchain and full-stack development
        </PanelDescription>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  )
}
