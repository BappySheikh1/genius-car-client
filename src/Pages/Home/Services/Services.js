import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCrad'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch(`https://genius-car-server-topaz.vercel.app/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services);
    return (
        <div>
            <div className='text-center py-24'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                 <h1 className='text-5xl font-bold'>Our Service Area</h1>
                 <p className='text-xl text-gray-600 mt-5'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                 services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <div className='text-center mb-5'>
            <button className="btn btn-outline  btn-warning font-bold text-white">More Services</button>
            </div>
        </div>
    );
};

export default Services;