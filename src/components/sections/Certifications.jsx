import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import certs from '../../data/certifications'
import CertCard from '../ui/CertCard'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading label="// CERTIFICATIONS" title="LICENSES & CERTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {certs.map((c) => (
          <CertCard key={c.id} cert={c} />
        ))}
      </div>
    </section>
  )
}
