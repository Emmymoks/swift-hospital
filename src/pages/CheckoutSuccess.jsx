import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedButton from '../components/AnimatedButton'

export default function CheckoutSuccess(){
  return (
    <ScrollReveal className="container mx-auto text-center py-12 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-semibold">Payment Successful</h2>
      <p className="text-slate-600 mt-4">Thank you for your purchase.</p>
  <AnimatedButton href="/" className="mt-6 inline-block px-4 py-2 sm:px-6 sm:py-3 rounded bg-accent text-white">Return Home</AnimatedButton>
    </ScrollReveal>
  )
}