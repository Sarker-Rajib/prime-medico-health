import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Feedback from './Feedback/Feedback';
import Newsletter from './Newsletter/Newsletter';
import OurDoctors from './OurDoctors/OurDoctors';
import OurGoal from './OurGoal/OurGoal';
import OurServices from './OurServices/OurServices';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Banner />
            <OurDoctors />
            <OurGoal />
            <OurServices />
            <Feedback />
            <Newsletter />
            <ContactUs />
        </div>
    );
};

export default Home;