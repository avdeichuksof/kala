import './productsContainer.css'
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'

import ProductCard from '../ProductCard/ProductCard'
import UpBtn from './UpBtn/UpBtn'


const ProductsContainer = ({ category }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        try {
            const db = getFirestore();
            const products = collection(db, 'products');

            if (category) {
                const filter = query(products, where('category', '==', category));
                getDocs(filter).then((res) => {
                    const filteredProducts = res.docs.map(product => ({
                        id: product.id,
                        ...product.data()
                    }));
                    console.log("Filtered Products:", filteredProducts)
                    setData(filteredProducts)
                    setLoading(false)
                })
            } else {
                getDocs(products).then((res) => {
                    const allProducts = res.docs.map(product => ({
                        id: product.id,
                        ...product.data()
                    }));
                    console.log("Products:", allProducts)
                    setData(allProducts)
                    setLoading(false)
                });
            }

        } catch (error) {
            console.error('Error fetching products: ', error)
            setLoading(false)
        }
    }, [category]);

    if (loading) {
        return <div className="loading">Cargando productos...</div>;
    }

    if (data.length === 0) return (
    <div className="empty-catalog">
        <p className='no-products'>Todavía no hay productos en esta categoría.</p>
    </div>
    )

    return (
        <div className="catalog">

            {data.map((product) => (
                <div key={product.id} className='product-card'>
                    <ProductCard product={product} />
                </div>
            ))}

            <UpBtn />
        </div>
    )
}

export default ProductsContainer