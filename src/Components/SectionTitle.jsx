import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='flex justify-center'>
            <h2 className='text-orange-600  text-4xl font-semibold text-center rounded-md border-b-4 border-slate-800 transition duration-500 ease-in-out hover:shadow-lg w-1/4  hover:border-emerald-600 pb-2 my-4'>{title}</h2>
        </div>
    );
};

export default SectionTitle;