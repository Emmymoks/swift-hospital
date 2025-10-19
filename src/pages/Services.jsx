import React from 'react'
import ServiceCard from '../components/ServiceCard'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedButton from '../components/AnimatedButton'

export default function Services(){
  const list = [
    {title:'Cardiology', desc:'Advanced cardiac care and cath lab.', icon:'❤️'},
    {title:'Oncology', desc:'Comprehensive cancer treatment.', icon:'🎗️'},
    {title:'Maternity', desc:'Private birthing suites and neonatal care.', icon:'🤱'},
    {title:'Surgery', desc:'Minimally invasive & robotic surgery.', icon:'🔪'},
    {title:'Orthopedics', desc:'Joint replacement and sports medicine.', icon:'🦴'},
    {title:'Emergency', desc:'24/7 ER with trauma specialists.', icon:'🚑'},
    {title:'Neurology', desc:'Stroke care and neurorehabilitation.', icon:'🧠'},
    {title:'Gastroenterology', desc:'Endoscopy and digestive health.', icon:'🫙'},
    {title:'Pulmonology', desc:'Respiratory care and sleep medicine.', icon:'🫁'},
    {title:'Dermatology', desc:'Medical and cosmetic skin treatments.', icon:'🩹'},
    {title:'Pharmacy', desc:'On-site pharmacy with consultation services.', icon:'💊'},
  ]
  return (
    <div className="container mx-auto grid gap-6 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-semibold">Our Services</h2>
      <p className="text-slate-600 mt-1">We offer a wide range of specialties delivered by experienced clinicians and supported by advanced diagnostic technology.</p>

      <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {list.map((s, i) => <ServiceCard key={s.title} {...s} delay={i*0.06} />)}
      </ScrollReveal>

      <ScrollReveal className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Specialty highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold">Cardiac Care Center</h4>
            <p className="text-sm text-slate-600 mt-2">Full-service cardiac program with interventional cardiology, pacemaker services, and a dedicated recovery unit.</p>
            <div className="mt-3">
              <AnimatedButton to="/book" className="inline-block px-4 py-2 rounded bg-accent text-white">Book a cardiac consult</AnimatedButton>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold">Minimally Invasive Surgery</h4>
            <p className="text-sm text-slate-600 mt-2">Robotic-assisted and laparoscopic surgeries for shorter recovery times and smaller scars.</p>
            <div className="mt-3">
              <AnimatedButton to="/book" className="inline-block px-4 py-2 rounded bg-accent text-white">Request a surgical consult</AnimatedButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}