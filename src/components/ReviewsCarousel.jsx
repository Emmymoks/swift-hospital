import React, {useState, useRef, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Simple carousel that shows 2 reviews per view, animates between slides and supports touch swipe on mobile.
export default function ReviewsCarousel({reviews = []}){
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(2)
  useEffect(()=>{
    function update(){
      const w = window.innerWidth
      if(w < 640) setPerPage(1)
      else if(w < 1024) setPerPage(2)
      else setPerPage(2)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  },[])

  const total = Math.max(1, Math.ceil(reviews.length / perPage))
  const touchStart = useRef(null)

  useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i+1) % total), 5000)
    return () => clearInterval(id)
  },[total])

  function next(){ setIndex(i => (i+1) % total) }
  function prev(){ setIndex(i => (i-1+total) % total) }

  function onTouchStart(e){ touchStart.current = e.touches[0].clientX }
  function onTouchEnd(e){
    if(touchStart.current == null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    if(Math.abs(dx) > 40){ if(dx < 0) next(); else prev() }
    touchStart.current = null
  }

  const start = index * perPage
  const visible = reviews.slice(start, start + perPage)

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div className={`grid ${perPage===1 ? 'grid-cols-1' : 'grid-cols-2'} gap-4 p-2 md:p-4`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <AnimatePresence initial={false} mode="wait">
            {visible.map(r => (
              <motion.div key={r.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="card">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-yellow-500">{'★'.repeat(r.rating)}</div>
                </div>
                <p className="text-slate-600 mt-2 text-sm">{r.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-accent/90 text-white shadow">‹</button>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-accent/90 text-white shadow">›</button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {Array.from({length: total}).map((_,i) => (
          <button key={i} onClick={()=>setIndex(i)} className={`w-2 h-2 rounded-full ${i===index? 'bg-accent' : 'bg-slate-300'}`} aria-label={`Go to slide ${i+1}`}></button>
        ))}
      </div>
    </div>
  )
}
