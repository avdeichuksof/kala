import './categoriesContainer.css'
import React from "react"
import { Link } from 'react-router-dom'

import pulserasImg from '../../img/pulseras.webp'

import CategoryCard from '../CategoryCard/CategoryCard'

const CategoriesContainer = () => {

    return (
        <div className="cat-container">
            <Link>
                <CategoryCard className='category' name='PULSERAS' bg={pulserasImg} />
            </Link>
            <Link>
                <CategoryCard className='category' name='HOLA' bg='https://placedog.net/500' />
            </Link>
            <Link>
                <CategoryCard className='category' name='HOLA' bg='https://placedog.net/500' />
            </Link>
            <Link>
                <CategoryCard className='category' name='HOLA' bg='https://placedog.net/500' />
            </Link>
            <Link>
                <CategoryCard className='category' name='HOLA' bg='https://placedog.net/500' />
            </Link>
            <Link>
                <CategoryCard className='category' name='HOLA' bg='https://placedog.net/500' />
            </Link>
        </div>
    )
}

export default CategoriesContainer