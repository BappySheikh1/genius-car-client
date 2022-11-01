import React from 'react';
import "./BannerItem.css";

const BannerItems = ({slide}) => {
  const {image,prev,next,id}=slide
  
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
        <img src={image} className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
          <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            Price for Car <br />
            Servicing
          </h1>
        </div>
    
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2">
        <p className='text-white text-xl'>There Are Many Variations Of Passages Of Available,But <br /> The Majority Have Suffered Alteration in Some Form </p>
        </div>
    
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
        
        <button className='btn btn-warning text-white mr-5'>Discover More</button>
        <button className='btn  btn-outline btn-warning text-white'>Latest Project</button>
        </div>
    
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5 focus:bg-red-700">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle  focus:bg-red-700">❯</a>
        </div>
      </div> 
    );
};

export default BannerItems;