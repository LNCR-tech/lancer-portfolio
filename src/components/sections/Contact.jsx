import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { MapPin, GraduationCap, GitCommit, User, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6 text-center">
      <SectionHeading label="// CONTACT" title="LET'S BUILD SOMETHING TOGETHER" centered />
      <p className="text-text-secondary mt-4">Open to collaborations, internships, freelance projects, and opportunities.</p>

      <div className="bg-navy-800 border border-cyan-400/20 rounded-xl p-8 mt-8 mx-auto max-w-lg text-left">
        <div className="flex items-center gap-3 text-text-secondary mb-2"><MapPin className="text-cyan-400"/> Dapitan, Zamboanga Peninsula, Philippines</div>
        <div className="flex items-center gap-3 text-text-secondary mb-2"><GraduationCap className="text-cyan-400"/> Jose Rizal Memorial State University</div>
        <div className="flex items-center gap-3 text-text-secondary mb-2"><GitCommit className="text-cyan-400"/> github.com/lancer-celicious</div>
        <div className="flex items-center gap-3 text-text-secondary mb-2"><User className="text-cyan-400"/> linkedin.com/in/lancer-celicious</div>
        <div className="flex items-center gap-3 text-text-secondary mb-2"><Mail className="text-cyan-400"/> lancer@email.com</div>
      </div>

      <div className="terminal-status text-cyan-400/70 inline-block mt-6 bg-navy-950 border border-cyan-400/20 rounded p-3">&gt; STATUS: [ ONLINE ] · BUILDING: Aura App + OptiPlan <span className="cursor-blink" /></div>
    </section>
  )
}
