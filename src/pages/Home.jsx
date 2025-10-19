import React, {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedButton from '../components/AnimatedButton'
import ReviewsCarousel from '../components/ReviewsCarousel'

function CountUp({end = 100, duration = 1200}){
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !started.current){
          started.current = true
          const start = performance.now()
          function tick(now){
            const t = Math.min(1, (now - start) / duration)
            setValue(Math.floor(t * end))
            if(t < 1) requestAnimationFrame(tick)
            else setValue(end)
          }
          requestAnimationFrame(tick)
        }
      })
    }, {threshold: 0.5})
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration])

  return <span ref={ref}>{value}</span>
}

const reviews = [
  {id:1, name:'Olivia Martinez', rating:5, text:'Exceptional care and very attentive staff. My experience was seamless from check-in to discharge.'},
  {id:2, name:'Ethan Johnson', rating:5, text:'Top-notch facilities and the doctors took time to explain every step. Highly recommend.'},
  {id:3, name:'Sophia Williams', rating:5, text:'The nurses were compassionate and professional. I felt heard and well cared for.'},
  {id:4, name:'Liam Brown', rating:5, text:'Quick diagnostics and clear treatment plan. Friendly staff and clean rooms.'},
  {id:5, name:'Ava Davis', rating:5, text:'The concierge helped me coordinate everything. Outstanding service and attention to detail.'},
  {id:6, name:'Noah Wilson', rating:5, text:'I received excellent follow-up and thorough explanations. The team really cares.'},
  {id:7, name:'Isabella Moore', rating:5, text:'State-of-the-art equipment and skilled specialists. I felt safe and supported.'},
  {id:8, name:'Mason Taylor', rating:5, text:'Efficient, clean, and professional. The whole visit exceeded my expectations.'},
  {id:9, name:'Mia Anderson', rating:5, text:'From scheduling to treatment, everything was smooth. Truly patient-first care.'},
  {id:10, name:'Lucas Thomas', rating:5, text:'Knowledgeable staff and quick results. I trust them with my family’s health.'},
  {id:11, name:'Charlotte Jackson', rating:5, text:'Warm staff and excellent communication. Comfortable private rooms made recovery easy.'}
]

export default function Home(){
  return (
    <div className="container mx-auto grid gap-8 px-4 sm:px-0">
  <ScrollReveal className="grid md:grid-cols-2 items-center gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Swift Hospital</h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">Where Expertise Meets Empathy. Luxury healthcare reimagined. Exceptional specialists, world-class facilities, and a patient-first experience.</p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <AnimatedButton to="/services" className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-accent text-white text-sm sm:text-base">Our Services</AnimatedButton>
            <AnimatedButton to="/pharmacy" className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg border text-sm sm:text-base">Visit Pharmacy</AnimatedButton>
          </div>
        </div>
        <motion.div initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} className="rounded-3xl overflow-hidden shadow-lg">
          <img src="https://i.pinimg.com/1200x/48/96/6a/48966a606e239ea04f91ee86d5c7d480.jpg" alt="hospital" className="w-full h-56 sm:h-72 md:h-80 object-cover"/>
        </motion.div>
  </ScrollReveal>

  <ScrollReveal className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-semibold">Private Suites</h3>
          <p className="text-sm text-slate-500 mt-2">Spacious rooms with premium amenities and personalized care.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Advanced Diagnostics</h3>
          <p className="text-sm text-slate-500 mt-2">State-of-the-art imaging and labs with rapid turnaround.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Concierge Services</h3>
          <p className="text-sm text-slate-500 mt-2">Dedicated staff for appointments, travel, and VIP care.</p>
        </div>
  </ScrollReveal>

  {/* Featured services */}
  <ScrollReveal className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">Featured services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">Cardiology</div>
            <div className="text-sm text-slate-500 mt-1">Heart care and diagnostics</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">Surgery</div>
            <div className="text-sm text-slate-500 mt-1">Robotic & minimally invasive</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">Maternity</div>
            <div className="text-sm text-slate-500 mt-1">Private suites and neonatal care</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">Pharmacy</div>
            <div className="text-sm text-slate-500 mt-1">On-site pharmacy & consults</div>
          </div>
        </div>
  </ScrollReveal>

  {/* Specialist highlights */}
  <ScrollReveal className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">Meet our specialists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img loading="lazy" src="https://i.pinimg.com/1200x/86/f3/dc/86f3dc324641520294375de069d57179.jpg" alt="Dr. Rebecca Saunders" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Dr. Rebecca Saunders</div>
              <div className="text-sm text-slate-500">Cardiologist</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img loading="lazy" src="https://i.pinimg.com/1200x/40/ea/59/40ea5971e628f211b147797ed3297c1a.jpg" alt="Dr. Alan Jacobs" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Dr. Alan Jacobs</div>
              <div className="text-sm text-slate-500">Neurosurgeon</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img loading="lazy" src="https://i.pinimg.com/1200x/97/96/0f/97960f9d817738d322a6b1b02f05c6b7.jpg" alt="Dr. Maya King" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Dr. Maya King</div>
              <div className="text-sm text-slate-500">Chief of Nursing</div>
            </div>
          </div>
        </div>
  </ScrollReveal>

  {/* Facility stats + CTA */}
  <ScrollReveal className="mt-6 grid md:grid-cols-3 gap-4 items-center">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-2xl font-bold">24/7</div>
          <div className="text-sm text-slate-500">Emergency care</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-start">
          <div className="text-2xl font-bold">
            <CountUp end={200} />+
          </div>
          <div className="text-sm text-slate-500">Specialists</div>
        </div>
        <div className="bg-accent text-white p-4 rounded-xl">
          <h4 className="font-semibold">Stay informed</h4>
          <p className="text-sm mt-2">Join our newsletter for health tips and updates.</p>
          <div className="mt-3">
            <a href="/contact" className="inline-block px-4 py-2 rounded bg-white text-accent">Subscribe</a>
          </div>
        </div>
  </ScrollReveal>
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4">What our customers say</h2>
        <ReviewsCarousel reviews={reviews} />
      </ScrollReveal>
    </div>
  )
}