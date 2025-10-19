import React, {useState} from 'react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedButton from '../components/AnimatedButton'

export default function BookAppointment(){
  const [form, setForm] = useState({name:'', email:'', phone:'', date:'', time:'', reason:''})
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e){
    const {name, value} = e.target
    setForm(f => ({...f, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.date || !form.time){
      alert('Please fill in required fields: name, email, date and time.')
      return
    }
    const appts = JSON.parse(localStorage.getItem('appointments')||'[]')
    const id = Date.now().toString()
    const record = {...form, id, createdAt: new Date().toISOString()}
    appts.push(record)
    localStorage.setItem('appointments', JSON.stringify(appts))
    setSubmitted(record)
    setForm({name:'', email:'', phone:'', date:'', time:'', reason:''})
  }

  return (
    <ScrollReveal className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      {submitted ? (
        <div className="card">
          <h3 className="font-semibold">Appointment received</h3>
          <p className="text-slate-600 mt-2">Thanks, {submitted.name}. We've recorded your requested appointment on {submitted.date} at {submitted.time}. We'll contact {submitted.email} to confirm (demo).</p>
          <button onClick={()=>setSubmitted(null)} className="mt-4 px-4 py-2 rounded bg-accent text-white">Book another</button>
        </div>
      ) : (
        <div className="card">
          <form onSubmit={handleSubmit} className="grid gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="p-3 border rounded" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="p-3 border rounded" />
            <div className="grid grid-cols-2 gap-2">
              <input name="date" value={form.date} onChange={handleChange} type="date" className="p-3 border rounded" required />
              <input name="time" value={form.time} onChange={handleChange} type="time" className="p-3 border rounded" required />
            </div>
            <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Reason for visit (optional)" className="p-3 border rounded h-28" />
            <div className="flex items-center justify-between mt-2">
              <AnimatedButton type="submit" className="px-4 py-2 rounded bg-accent text-white">Confirm Appointment</AnimatedButton>
            </div>
          </form>
        </div>
      )}
    </ScrollReveal>
  )
}
