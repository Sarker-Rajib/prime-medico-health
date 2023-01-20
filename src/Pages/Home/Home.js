import React, { useEffect } from 'react';
import Banner from './Banner/Banner';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;