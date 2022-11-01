import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <div className='text-center mb-16'>
                <p className='text-xl text-red-600 font-bold'>Popular   Products</p>
                 <h2 className='text-5xl font-bold my-3'>Browser Our Products</h2>
                 <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24'>
            
                {
                 products.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Product;