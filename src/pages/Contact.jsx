import React, {useState, useEffect} from 'react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedButton from '../components/AnimatedButton'

function ReviewsList({reviews}){
  if(!reviews || reviews.length === 0) return <div className="text-slate-500">No reviews yet.</div>
  return (
    <div className="space-y-3">
      {reviews.slice().reverse().map(r => (
        <div key={r.id} className="bg-white p-3 rounded shadow">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{r.name}</div>
            <div className="text-yellow-500">{'★'.repeat(r.rating)}</div>
          </div>
          <p className="text-sm text-slate-600 mt-1">{r.text}</p>
        </div>
      ))}
    </div>
  )
}

export default function Contact(){
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({name:'', email:'', rating:5, text:''})

  useEffect(()=>{
    try{ setReviews(JSON.parse(localStorage.getItem('reviews')||'[]')) }catch(e){ setReviews([]) }
  },[])

  function handleChange(e){
    const {name, value} = e.target
    setForm(f => ({...f, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.text) {
      alert('Please provide name, email and review text.')
      return
    }
    const next = [...reviews, {...form, id: Date.now()}]
    localStorage.setItem('reviews', JSON.stringify(next))
    setReviews(next)
    setForm({name:'', email:'', rating:5, text:''})
  }

  return (
    <div className="container mx-auto grid gap-4">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
  <ScrollReveal className="card">
          <h4 className="font-semibold mb-2">Get in touch</h4>
          <p className="text-sm text-slate-600">Call our concierge or send us a message and we'll respond promptly.</p>
          <div className="mt-4 space-y-2">
            <div><strong>Phone:</strong> +1 (555) 123-4567</div>
            <div><strong>Email:</strong> info@swifthospital.example</div>
            <div><strong>Address:</strong> 123 Wellness Ave, Suite 100</div>
          </div>
        </ScrollReveal>

  <ScrollReveal className="card">
          <h4 className="font-semibold mb-2">Send a message</h4>
          <form onSubmit={(e)=>{ e.preventDefault(); alert('Message sent (demo).') }}>
            <div className="grid gap-2">
              <input required placeholder="Your name" className="p-3 border rounded"/>
              <input required type="email" placeholder="Email" className="p-3 border rounded"/>
              <textarea required placeholder="Message" className="p-3 border rounded h-32"></textarea>
              <AnimatedButton type="submit" className="mt-2 px-4 py-2 rounded bg-accent text-white">Send</AnimatedButton>
            </div>
          </form>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h4 className="font-semibold mb-3">Leave a review</h4>
          <form onSubmit={handleSubmit} className="grid gap-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="p-3 border rounded" required />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="p-3 border rounded" required />
            <div className="flex items-center gap-2">
              <label className="text-sm">Rating:</label>
              <select name="rating" value={form.rating} onChange={handleChange} className="p-2 border rounded">
                <option value={5}>5 - Excellent</option>
                <option value={4}>4 - Very good</option>
                <option value={3}>3 - Good</option>
                <option value={2}>2 - Fair</option>
                <option value={1}>1 - Poor</option>
              </select>
            </div>
            <textarea name="text" value={form.text} onChange={handleChange} placeholder="Write your review" className="p-3 border rounded h-28" required />
            <div className="flex items-center justify-between">
              <AnimatedButton type="submit" className="px-4 py-2 rounded bg-accent text-white">Submit Review</AnimatedButton>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  )
}