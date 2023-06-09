import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowAll = ({location}) => {
    return (
        <div className='flex justify-center my-4'>
            <Link to={location}>
                <button className='flex items-center custom-btn'>
                    Show all <span className='ml-2'><FaArrowRight /></span>
                </button>
            </Link>
        </div>
    );
};

export default ShowAll;