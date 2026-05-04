import './categoriesContainer.css'
import React from "react"
import { Link } from 'react-router-dom'

import pulserasImg from '../../img/pulseras.webp'
import llaveroImg from '../../img/llavero.jpg'
import manoplasImg from '../../img/manopla.jpg'
import collaresImg from '../../img/collar.jpg'
import charmsImg from '../../img/charm.jpg'
import todoImg from '../../img/todo.jpg'

import CategoryCard from '../CategoryCard/CategoryCard'

const CategoriesContainer = () => {

    return (
        <div className="cat-container">
            <Link to='/catalogo' className='link'>
                <CategoryCard className='category' name='TODO' bg={todoImg} />
            </Link>
            <Link to='/catalogo/charms' className='link'>
                <CategoryCard className='category' name='CHARMS' bg={charmsImg} />
            </Link>
            <Link to='/catalogo/manoplas' className='link'>
                <CategoryCard className='category' name='MANOPLAS' bg={manoplasImg} />
            </Link>
            <Link to='/catalogo/collares' className='link'>
                <CategoryCard className='category' name='COLLARES' bg={collaresImg} />
            </Link>
            <Link to='/catalogo/llaveros' className='link'>
                <CategoryCard className='category' name='LLAVEROS' bg={llaveroImg} />
            </Link>
            <Link to='/catalogo/pulseras' className='link'>
                <CategoryCard className='category' name='PULSERAS' bg={pulserasImg} />
            </Link>
        </div>
    )
}

export default CategoriesContainer