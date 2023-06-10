import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Gallery from '../ExtraSection/Gallery';
import { motion, useScroll } from "framer-motion"

const Home = () => {
    const {scrollYProgress} = useScroll()
    return (
        <div>
            <motion.div 
            
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 6,
                    background: 'blue',
                    transformOrigin: '0%'
                }}
            />
            <Banner />

            
            {/* popular classes */}
            <PopularClass />

            {/* Popular instructor  */}
            <PopularInstructor />

              {/* Gallery  */}
              <Gallery />


            
        </div>
    );
};

export default Home;