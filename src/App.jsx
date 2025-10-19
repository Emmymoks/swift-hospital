import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pharmacy from './pages/Pharmacy'
import Contact from './pages/Contact'
import CheckoutSuccess from './pages/CheckoutSuccess'
import BookAppointment from './pages/BookAppointment'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/success" element={<CheckoutSuccess />} />
        </Routes>
      </main>
      <footer className="bg-primary text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          © 2025 Swift Hospital. Where Expertise Meets Empathy
        </div>
      </footer>
    </div>
  )
}