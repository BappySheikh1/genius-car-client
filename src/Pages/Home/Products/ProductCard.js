import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({product}) => {
    const {img,price,title}=product
    // console.log(product);
    return (
        <div>
            <div className="card shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} style={{width:'303px',height:'200px'}} alt="Shoes" className="rounded-xl  bg-gray-400" />
  </figure>
  <div className="card-body items-center text-center">
    <p className='flex text-yellow-400'> <FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></p>
    <h2 className="card-title">{title}</h2>
    <p className='text-red-600 font-bold'>${price}</p>
  </div>
</div>
        </div>
    );
};

export default ProductCard;