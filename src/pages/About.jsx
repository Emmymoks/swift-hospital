import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import CountUp from '../components/CountUp'

export default function About(){
  return (
    <div className="container mx-auto grid gap-6 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-semibold">About Swift Hospital</h2>
      <p className="text-slate-600">Swift Hospital blends clinical excellence with a compassionate, luxury experience. Our team of specialists and nurses deliver expert care in an environment designed for comfort and healing.</p>
  <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="card">
          <h4 className="font-semibold">Mission</h4>
          <p className="text-sm text-slate-500 mt-2">Deliver outstanding care with empathy and innovation.</p>
        </div>
        <div className="card">
          <h4 className="font-semibold">Vision</h4>
          <p className="text-sm text-slate-500 mt-2">Be the region's premier luxury hospital and trusted partner for health.</p>
        </div>
        <div className="card">
          <h4 className="font-semibold">Values</h4>
          <p className="text-sm text-slate-500 mt-2">Integrity, compassion, excellence.</p>
        </div>
  </ScrollReveal>

  {/* History */}
  <ScrollReveal className="mt-8 card">
        <h3 className="text-xl font-semibold">Our Story</h3>
        <p className="text-slate-600 mt-2">Founded in 2002, Swift Hospital started as a small clinic with a big vision: to combine world-class medicine with hospitality-grade service. Over two decades we expanded our specialties, invested in advanced technology, and cultivated a patient-first culture that places safety and compassion at the center of care.</p>
  </ScrollReveal>

  {/* Leadership */}
  <ScrollReveal className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Leadership</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img loading="lazy" src="https://i.pinimg.com/1200x/86/f3/dc/86f3dc324641520294375de069d57179.jpg" alt="Dr. Rebecca Saunders" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Dr. Rebecca Saunders</div>
              <div className="text-sm text-slate-500">Chief Medical Officer</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img loading="lazy" src="https://i.pinimg.com/1200x/14/ad/bd/14adbd81a63b44592b8a1cc3b458190d.jpg" alt="Aiden Johnson" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Aiden Johnson</div>
              <div className="text-sm text-slate-500">Chief Operations Officer</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img loading="lazy" src="https://i.pinimg.com/1200x/97/96/0f/97960f9d817738d322a6b1b02f05c6b7.jpg" alt="Maya King" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Maya King</div>
              <div className="text-sm text-slate-500">Head of Nursing</div>
            </div>
          </div>
        </div>
  </ScrollReveal>

  {/* Facility stats */}
  <ScrollReveal className="mt-8 card">
        <h3 className="text-xl font-semibold mb-4">By the numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-slate-500">Emergency care</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold"><CountUp end={200} suffix="+" /></div>
            <div className="text-sm text-slate-500">Specialists</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold"><CountUp end={150} /></div>
            <div className="text-sm text-slate-500">Private rooms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold"><CountUp end={98} suffix="%" /></div>
            <div className="text-sm text-slate-500">Patient satisfaction</div>
          </div>
        </div>
  </ScrollReveal>

  {/* Awards and CTA */}
  <ScrollReveal className="mt-8 grid lg:grid-cols-2 gap-6 items-center">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Awards & Accreditations</h3>
          <ul className="list-disc pl-5 text-sm text-slate-600">
            <li>National Healthcare Excellence Award 2023</li>
            <li>Top Patient Safety Rating 2024</li>
            <li>Accredited by the Regional Medical Board</li>
          </ul>
        </div>

        <div className="bg-accent text-white p-6 rounded-xl">
          <h3 className="text-lg font-semibold">Experience distinguished care</h3>
          <p className="mt-2 text-sm">Book an appointment with our specialists today. We combine clinical excellence with personalized service to make your visit calm and efficient.</p>
          <a href="/book" className="mt-4 inline-block px-4 py-2 rounded bg-white text-accent font-semibold">Book Appointment</a>
        </div>
  </ScrollReveal>
    </div>
  )
}
