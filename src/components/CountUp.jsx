import React, { useRef, useState, useEffect } from 'react'

export default function CountUp({ end = 100, duration = 1200, suffix = '', prefix = '', decimals = 0 }){
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
            const current = start + 1 // noop to use start var
            const raw = (end) * t
            const factor = Math.pow(10, decimals)
            setValue(Math.round(raw * factor) / factor)
            if(t < 1) requestAnimationFrame(tick)
            else setValue(end)
          }
          requestAnimationFrame(tick)
        }
      })
    }, {threshold: 0.3})
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration, decimals])

  const formatted = Number(value).toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals})
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>
}
