import './productCard.css'
import 'animate.css'

const ProductCard = ({product}) => {
    return (
        <div className="card-container">
            <img className='card-img' src={product.thumbnail} alt={product.title} />
            <div className="card-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className='card-price'>${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard