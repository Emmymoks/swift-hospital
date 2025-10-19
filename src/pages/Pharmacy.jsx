import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'
import CartDrawer from '../components/CartDrawer'
import Toast from '../components/Toast'

const categorizedProducts = {
  'Pain & Fever': [
    {id:'p1', name:'Paracetamol 500mg', description:'Pain reliever & fever reducer', price:2.50, image:'https://i.pinimg.com/1200x/12/63/08/126308d92b265ed9e6f5e80d48d839a8.jpg'},
    {id:'p7', name:'Ibuprofen 200mg', description:'NSAID for pain & inflammation', price:3.25, image:'https://i.pinimg.com/1200x/5f/43/e9/5f43e94d90c4a32537a0649f1a47983e.jpg'},
    {id:'p8', name:'Aspirin 81mg', description:'Low-dose aspirin', price:4.00, image:'https://i.pinimg.com/1200x/48/ee/b4/48eeb4a0110e9b5f9052850241408d36.jpg'}
  ],
  'Antibiotics': [
    {id:'p2', name:'Amoxicillin 500mg', description:'Antibiotic (capsules)', price:8.00, image:'https://drweightmans.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-08-15-at-7.17.21-PM-1.jpeg'},
    {id:'p9', name:'Azithromycin 250mg', description:'Macrolide antibiotic', price:15.00, image:'https://www.sanifyhealthcare.com/wp-content/uploads/2021/07/Ziticin-250-Tab.jpg'}
  ],
  'Gastrointestinal': [
    {id:'p3', name:'Omeprazole 20mg', description:'Acid reducer', price:12.00, image:'https://res.cloudinary.com/zava-www-uk/image/upload/a_exif,f_auto,e_sharpen:100,c_fit,w_800,h_600,fl_lossy/v1706806290/sd/uk/services-setup/acid-reflux/omeprazole/knh8cjncnq9z5axkil3h.png'},
    {id:'p10', name:'Loperamide 2mg', description:'Anti-diarrheal', price:5.50, image:'https://www.xalmeds.com/cdn/shop/files/IMG_7050.jpg?v=1698939146'}
  ],
  'Chronic Care': [
    {id:'p4', name:'Insulin (vial)', description:'For diabetes management, consult physician', price:45.00, image:'https://origins.osu.edu/sites/default/files/inline-images/Inzul%C3%ADn.jpg'},
    {id:'p11', name:'Atorvastatin 20mg', description:'Cholesterol management', price:18.00, image:'https://healthplusnigeria.com/cdn/shop/files/Teva_20Atorvastatin_2020mg_20x28_1b6158c0-f6f1-4e88-9d12-8f65ce1bb970.webp?v=1757093284'}
  ],
  'Supplements & OTC': [
    {id:'p5', name:'Cough Syrup 100ml', description:'Soothes coughs', price:6.25, image:'https://i.pinimg.com/1200x/9d/5d/c9/9d5dc91fa25b2a6c369d512271e898fb.jpg'},
    {id:'p6', name:'Vitamin D 1000 IU', description:'Dietary supplement', price:9.50, image:'https://i.pinimg.com/1200x/07/91/f7/0791f74de4624b66f8e156c8c0ec7e40.jpg'},
    {id:'p12', name:'Multivitamin', description:'Daily multivitamin', price:14.00, image:'https://i.pinimg.com/1200x/61/d9/aa/61d9aae0e8b87d8fcf11b0d710813e63.jpg'}
  ]
}

export default function Pharmacy(){
  // Flatten products for cart logic but keep categories for display
  const flatProducts = Object.values(categorizedProducts).flat()
  const [products] = useState(flatProducts)
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')||'[]')
    } catch(e){ return [] }
  })
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState({ open: false, message: '' })

  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])

  function handleAdd(p){
    setCart(prev => {
      const found = prev.find(x=>x.id===p.id)
      if(found) return prev.map(x=> x.id===p.id ? {...x, qty: x.qty+1} : x)
      return [...prev, {...p, qty:1}]
    })
    setToast({ open: true, message: `${p.name} added to cart` })
  }

  function handleRemove(item){
    setCart(prev => prev.filter(x => x.id !== item.id))
  }

  function handleCheckout(){
    // Demo / placeholder for Stripe integration.
    // In a production app, you would call your backend to create a Stripe Checkout session and redirect.
    // Here we simulate a payment flow and redirect to /success.
    localStorage.removeItem('cart')
    setCart([])
    setOpen(false)
    window.location.href = '/success'
  }

  return (
    <div className="container mx-auto grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Pharmacy</h2>
        <div>
          <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-lg bg-accent text-white">Open Cart ({cart.reduce((s,i)=>s+i.qty,0)})</button>
        </div>
      </div>

      <p className="text-slate-600">Browse our curated list of medicines. Prices shown are for demonstration only. Please consult our pharmacist for prescriptions and dosing.</p>

      <div className="mt-4 space-y-8">
        {Object.entries(categorizedProducts).map(([category, items]) => (
          <ScrollReveal key={category} className="block">
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(p => <ProductCard key={p.id} product={p} onAdd={handleAdd} />)}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <CartDrawer open={open} items={cart} onClose={()=>setOpen(false)} onRemove={handleRemove} onCheckout={handleCheckout} />
      <Toast open={toast.open} message={toast.message} duration={1000} onClose={()=>setToast({ open:false, message: '' })} />
    </div>
  )
}
