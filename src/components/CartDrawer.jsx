import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CartDrawer({open, items, onClose, onRemove, onCheckout}){
  const total = items.reduce((s,i)=>s + i.price * i.qty,0)
  return (
    <motion.div initial={{x: '100%'}} animate={{x: open ? 0 : '100%'}} transition={{type:'spring'}} className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50">
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="font-semibold">Your Cart</h3>
        <button onClick={onClose} className="text-slate-500">Close</button>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        {items.length===0 && <div className="text-slate-500">Cart is empty.</div>}
        <div className="space-y-3">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-xs text-slate-500">qty: {it.qty}</div>
              </div>
              <div className="text-right">
                <div>${(it.price*it.qty).toFixed(2)}</div>
                <button onClick={() => onRemove(it)} className="text-xs text-red-500 mt-2">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between mb-3">
          <div className="text-slate-600">Total</div>
          <div className="font-semibold">${total.toFixed(2)}</div>
        </div>
        <div className="space-x-2">
          <button onClick={() => onCheckout()} className="w-full px-4 py-2 rounded-lg bg-accent text-white">Checkout (Demo)</button>
          <Link to="/pharmacy" onClick={onClose} className="block text-center mt-2 text-sm text-slate-600">Continue shopping</Link>
        </div>
      </div>
    </motion.div>
  )
}