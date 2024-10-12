import './filterProducts.css'
import React from 'react'

const FilterProducts = ({onCategoryChange, categories}) => {
    return (
        <div className="filter-container">
            <label>Filtrar:</label>
            <select className='filter-selector' onChange={(e) => onCategoryChange(e.target.value)}>
                <option className='filter-option' value="">Todo</option>
                {categories.map((category) => (
                    <option className='filter-option' key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )

}

export default FilterProducts