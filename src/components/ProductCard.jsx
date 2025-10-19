import React from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'

export default function ProductCard({product, onAdd}){
  return (
    <motion.div whileHover={{scale:1.02}} className="card">
      <img src={product.image} alt={product.name} className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-lg mb-3"/>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-sm md:text-base">{product.name}</h4>
          <p className="text-xs md:text-sm text-slate-500">{product.description}</p>
        </div>
        <div className="text-right">
          <div className="font-semibold text-sm md:text-base">${product.price.toFixed(2)}</div>
          <AnimatedButton onClick={() => onAdd(product)} className="mt-3 px-3 py-1 sm:px-3 sm:py-1 rounded-md bg-accent text-white text-xs sm:text-sm">Add</AnimatedButton>
        </div>
      </div>
    </motion.div>
  )
}