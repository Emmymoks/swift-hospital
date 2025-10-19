import React from 'react'
import { motion } from 'framer-motion'

export default function ScrollReveal({children, className = '', delay = 0}){
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  )
}
