import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Newsletter from './Newsletter/Newsletter';
import OurDoctors from './OurDoctors/OurDoctors';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Banner></Banner>
            <OurDoctors></OurDoctors>
            <Newsletter></Newsletter>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;