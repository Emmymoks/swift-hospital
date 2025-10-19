import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({title, desc, icon, delay=0}){
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay}} className="card">
      <div className="text-2xl sm:text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-600 mt-2">{desc}</p>
    </motion.div>
  )
}