import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import OurDoctors from './OurDoctors/OurDoctors';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Banner></Banner>
            <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;