import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner />

            {/* popular classes */}
            <PopularClass />

            {/* Popular instructor  */}
            <PopularInstructor />
        </div>
    );
};

export default Home;