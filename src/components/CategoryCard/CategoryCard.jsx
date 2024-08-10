import './categoryCard.css'
import React from "react"

const CategoryCard = ({name, bg}) => {
    return (
        <div className="category-card" style={{backgroundImage: `url(${bg})`}}>
            <h2>{name}</h2>
        </div>
    )
}

export default CategoryCard