import { useCart } from '../../context/CartContext'
import './cart.css'

function Cart({onClose}) {
    const {cart, deleteProduct, emptyCart, total} = useCart()

    const sendWpp = () => {
        const number = process.env.REACT_APP_NUMERO

        const list = cart.map(p =>
            `• ${p.title} x${p.cantidad} - $${p.price * p.cantidad}`
        ).join("\n")

        const message = `Hola! Me gustaría hacer el siguiente pedido:\n\n${list}\n\nTotal: $${total}`

        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank")
    }

    return (
        <div className='cart'>
            <h2 className='cart-title'>Tus Productos</h2>

            {cart.length === 0
                ? <p>No hay productos todavía.</p>
                : <>
                    {cart.map(p => (
                        <div key={p.id} className='cart-item'>
                            <span>{p.title} x{p.cantidad}</span>
                            <span>${p.price * p.cantidad}</span>
                            <button className='cart-btn-x' onClick={() => deleteProduct(p.id)}>✕</button>
                        </div>
                    ))}

                    <p className='cart-total'>Total: ${total}</p>

                    <button className='cart-btn' onClick={sendWpp}>
                        Hacer pedido por WhatsApp
                    </button>

                    <button className='cart-btn' onClick={emptyCart}>
                        Vaciar carrito
                    </button>
                </>
            }
        </div>
    )
}

export default Cart