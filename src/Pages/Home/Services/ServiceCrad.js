import React from 'react';
import {  FaArrowAltCircleRight } from 'react-icons/fa';

const ServiceCrad = ({service}) => {
    const {img,price,title}=service
    console.log(service);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-20 p-5">
  <figure><img style={{height:'250px'}} src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions justify-end">
    <p className='text-xl font-semibold text-orange-500'>Price: ${price}</p>
      <button className="btn btn-outline border-none"><FaArrowAltCircleRight /></button>
    </div>
  </div>
</div>
    );
};

export default ServiceCrad;