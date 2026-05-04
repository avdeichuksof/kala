import "./productCard.css";
import "animate.css";
import { useCart } from '../../context/CartContext'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
    <div className="card-container">
        <img className="card-img" src={product.thumbnail} alt={product.title} />
        <div className="card-info">
        <h3>{product.title}</h3>
        <p className="card-price">${product.price}</p>
        </div>
        <button className="card-button" onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
    );
};

export default ProductCard;
