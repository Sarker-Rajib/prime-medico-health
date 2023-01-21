import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import OurDoctors from './OurDoctors/OurDoctors';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Banner></Banner>
            <OurDoctors></OurDoctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;