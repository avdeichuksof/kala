import './toast.css'
import { useCart } from '../../context/CartContext'

const Toast = () => {
    const { toast } = useCart()

    if (!toast) return null

    console.log("Toast message:", toast)

    return (
        <div className='toast'>
            🛒 {toast}
        </div>
    )
}

export default Toast