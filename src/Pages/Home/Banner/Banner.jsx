import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel className='text-center'>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1681234558876-b0a1b28cbedb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1681234558876-b0a1b28cbedb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1681234558876-b0a1b28cbedb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <p className="legend">Legend 1</p>
                </div>
        </Carousel>
    );
};

export default Banner;