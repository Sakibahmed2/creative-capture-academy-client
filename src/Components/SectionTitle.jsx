import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='flex justify-center border-b-4 border-slate-800 w-10/12 mx-auto md:w-1/3 rounded-md  transition duration-500 ease-in-out hover:shadow-lg  hover:border-sky-600 pb-2 my-4'>
            <h2 className='text-orange-600 text-2xl md:text-4xl font-semibold text-center '>{title}</h2>
        </div>
    );
};

export default SectionTitle;