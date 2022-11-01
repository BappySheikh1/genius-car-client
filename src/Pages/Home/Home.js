import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ContructUs from './Contract/ContructUs';
import Product from './Products/Product';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <ContructUs />
            <Product />
        </div>
    );
};

export default Home;