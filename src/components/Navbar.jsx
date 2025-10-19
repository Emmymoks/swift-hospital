import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white/70 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center text-white font-bold text-lg">
            SH
          </div>
          <div>
            <div className="font-semibold">Swift Hospital</div>
            <div className="text-xs text-slate-500">Where Expertise Meets Empathy</div>
          </div>
        </div>

  <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700'}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700'}>Services</NavLink>
          <NavLink to="/pharmacy" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700'}>Pharmacy</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700'}>Contact</NavLink>
          <NavLink to="/book" className={({isActive}) => (isActive ? 'px-4 py-2 rounded-lg bg-accent text-white opacity-95' : 'px-4 py-2 rounded-lg bg-accent text-white')}>
            <AnimatedButton className="px-0 py-0">Book Appointment</AnimatedButton>
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(v=>!v)} className="p-3 rounded-md bg-slate-100 inline-flex items-center gap-2">
            <span className="sr-only">Toggle menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden border-t overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className={`p-4 space-y-3 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-200`}> 
          <NavLink to="/" onClick={()=>setOpen(false)} className="block py-2">Home</NavLink>
          <NavLink to="/about" onClick={()=>setOpen(false)} className="block py-2">About</NavLink>
          <NavLink to="/services" onClick={()=>setOpen(false)} className="block py-2">Services</NavLink>
          <NavLink to="/pharmacy" onClick={()=>setOpen(false)} className="block py-2">Pharmacy</NavLink>
          <NavLink to="/contact" onClick={()=>setOpen(false)} className="block py-2">Contact</NavLink>
          <NavLink to="/book" onClick={()=>setOpen(false)} className="w-full mt-2 inline-block text-center px-4 py-3 rounded-lg bg-accent text-white">
            <AnimatedButton className="px-0 py-0">Book Appointment</AnimatedButton>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}