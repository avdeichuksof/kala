import './categoriesContainer.css'
import React from "react"
import { Link } from 'react-router-dom'

import pulserasImg from '../../img/pulseras.webp'

import CategoryCard from '../CategoryCard/CategoryCard'

const CategoriesContainer = () => {

    

    return (
        <div className="cat-container">
            <Link to='/catalogo/pulseras' className='link'>
                <CategoryCard className='category' name='PULSERAS' bg={pulserasImg} />
            </Link>
            <Link to='/catalogo/carteras' className='link'>
                <CategoryCard className='category' name='CARTERAS' bg='https://placedog.net/500' />
            </Link>
            <Link to='/catalogo/vestidos' className='link'>
                <CategoryCard className='category' name='VESTIDOS' bg='https://placedog.net/500' />
            </Link>
            <Link to='/catalogo/pulseras' className='link'>
                <CategoryCard className='category' name='AMIGURUMIS' bg='https://placedog.net/500' />
            </Link>
            <Link to='/catalogo/bufandas' className='link'>
                <CategoryCard className='category' name='BUFANDAS' bg='https://placedog.net/500' />
            </Link>
            <Link to='/catalogo/pulseras' className='link'>
                <CategoryCard className='category' name='DECORACIONES' bg='https://placedog.net/500' />
            </Link>
        </div>
    )
}

export default CategoriesContainer