import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import ShowAll from '../../../Components/ShowAll';
import InstructorsCard from '../../../Components/InstructorsCard';



const PopularInstructor = () => {
    const [instrutors, setInstructors] = useState()
    const instructorLimit = 6;

    useEffect(() => {
        fetch(`https://creative-capturea-academy.vercel.app/instructorlimit?limit=${instructorLimit}`)
        .then(res => res.json())
        .then(data =>{
            setInstructors(data)
        })
    },[])
    return (
        <div className=' mt-20'>
            <SectionTitle title={'Popular instructor'} />

            <div className='grid md:grid-cols-3 gap-6 mt-8 w-10/12 mx-auto'>
                {
                    instrutors?.map(instructor => <InstructorsCard
                        key={instructor?._id}
                        instructor={instructor}
                    ></InstructorsCard>)
                }
            </div>

            <ShowAll location={'/instructors'} />

        </div>
    );
};

export default PopularInstructor;