import React, { useEffect, useState } from 'react';
import AllInstructor from './AllInstructor';
import InstructorsCard from '../../Components/InstructorsCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState()

    useEffect(() => {
        fetch('https://creative-capturea-academy.vercel.app/allinstructor')
        .then(res => res.json())
        .then(data =>{
            setInstructors(data)
        })
    }, [])

    return (
        <div>
            <div className='grid mb-8 md:grid-cols-3 gap-6 pt-20 w-10/12 mx-auto'>
                {
                    instructors?.map(instructor => <InstructorsCard
                        key={instructor?._id}
                        instructor={instructor}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;