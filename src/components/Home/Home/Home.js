import React from 'react';
import Banner from '../Banner/Banner';
import HappyPatients from '../HappyPatients/HappyPatients';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <HappyPatients></HappyPatients>
        </div>
    );
};

export default Home;