import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import projects from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading label="// PROJECTS" title="MY WORK" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
