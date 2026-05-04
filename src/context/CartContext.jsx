import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const [toast, setToast] = useState(null)

    const showToast = (mensaje) => {
        setToast(mensaje)
        setTimeout(() => setToast(null), 2500)
    }

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === product.id)
            if(exists) {
                // si ya está, se suma la cantidad
                return prev.map(p => p.id === product.id ? {...p, cantidad: p.cantidad + 1} : p)
            }
            return [...prev, {...product, cantidad: 1}]
        })
        showToast(`${product.title} agregado al carrito`)
    }
    
    const deleteProd = (id) => {setCart(prev => prev.filter(p => p.id !== id))}
    
    const emptyCart = () => setCart([])
    
    const total = cart.reduce((acc, p) => acc + p.price * p.cantidad, 0)
    
    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProd, emptyCart, total, toast }}> {children} </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)