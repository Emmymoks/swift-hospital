import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function AnimatedButton({children, to, href, className = '', onClick, type='button'}){
  const base = `${className} inline-flex items-center justify-center`

  const content = (
    <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.span>
  )

  if(to) return (
    <NavLink to={to} className={base} onClick={onClick}>{content}</NavLink>
  )

  if(href) return (
    <a href={href} className={base} onClick={onClick}>{content}</a>
  )

  return (
    <button type={type} onClick={onClick} className={base}>{content}</button>
  )
}
