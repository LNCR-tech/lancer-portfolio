import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import skillsData from '../../data/skills'
import SkillPill from '../ui/SkillPill'
import SkillsOrb from '../three/SkillsOrb'
import { Code2, Brain, Cpu, Palette } from 'lucide-react'

const ICONS = { Code2, Brain, Cpu, Palette }

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading label="// SKILLS" title="WHAT I KNOW" />
      <div className="mb-12 rounded-xl overflow-hidden border border-navy-700 bg-navy-800/30">
        <SkillsOrb />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {skillsData.map((cat, i) => {
          const Icon = ICONS[cat.icon] || Code2
          return (
            <div key={cat.category} className="bg-navy-800/50 border border-navy-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-cyan-400" />
                <h4 className="font-display text-xl text-text-primary">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, idx) => (
                  <SkillPill key={s} label={s} index={idx} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
