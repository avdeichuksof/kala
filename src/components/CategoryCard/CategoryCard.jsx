import './categoryCard.css'
import 'animate.css'

const CategoryCard = ({name, bg}) => {
    return (
        <div className="category-card" style={{backgroundImage: `url(${bg})`}}>
            <h2>{name}</h2>
        </div>
    )
}

export default CategoryCard