import { CollapsibleList } from "@/components/collapsible-list"

import { PROJECTS } from "../../data/projects"
import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "../panel"
import { ProjectItem } from "./project-item"

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Featured Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
        <PanelDescription>
          A showcase of my blockchain and full-stack development projects
        </PanelDescription>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={10}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
