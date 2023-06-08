import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner 1.png'
import img2 from '../../../assets/banner2.png'
import img3 from '../../../assets/banner 3.png'
import img4 from '../../../assets/banner 4.png'

const Banner = () => {
    return (
        <Carousel className='text-center'>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 1</p>
                </div>
        </Carousel>
    );
};

export default Banner;