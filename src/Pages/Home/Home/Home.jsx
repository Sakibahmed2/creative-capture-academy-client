import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner />

            {/* popular classes */}
            <PopularClass />
        </div>
    );
};

export default Home;