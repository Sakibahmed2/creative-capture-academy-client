import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import PopularClassCard from './PopularClassCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ShowAll from '../../../Components/ShowAll';

const PopularClass = () => {

    const [popularClass, setPopularClass] = useState()
    const classLimit = 6;

    useEffect(() => {
        fetch(`https://creative-capturea-academy.vercel.app/classslimit?limit=${classLimit}`)
            .then(res => res.json())
            .then(data => {
                setPopularClass(data)
            })
    }, [])

    return (
        <div className='w-10/12 mx-auto mt-20'>
            <SectionTitle title={'Popular Classes'} />

            <div className='grid md:grid-cols-3 gap-6 mt-8'>
                {
                    popularClass?.map(popular => <PopularClassCard
                        key={popular?._id}
                        popular={popular}
                    ></PopularClassCard>)
                }
            </div>

            <ShowAll location={'/classes'} />


        </div>
    );
};

export default PopularClass;