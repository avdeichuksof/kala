import './catalogo.css'
import React, { useState } from 'react'

import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import FilterProducts from '../../components/FilterProducts/FilterProducts'


const Catalogo = () => {
    const [selectedCat, setSelectedCat] = useState('')
    const categories = ['Pulseras', 'Carteras', 'Vestidos', 'Bufandas']

    const categoryChangeHandler = (category) => {
        setSelectedCat(category)
    }

    return <div>
        <FilterProducts categories={categories} onCategoryChange={categoryChangeHandler} />
        <ProductsContainer category={selectedCat} />
    </div>
}

export default Catalogo