import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ open = false, message = '', onClose = () => {}, duration = 1000 }){
  useEffect(()=>{
    if(!open) return
    const id = setTimeout(()=> onClose(), duration)
    return ()=> clearTimeout(id)
  },[open, duration, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="px-4 py-2 rounded-lg bg-accent text-white shadow-lg">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
