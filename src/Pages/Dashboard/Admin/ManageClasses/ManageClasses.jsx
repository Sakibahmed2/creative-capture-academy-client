import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassesCard from './ClassesCard';

const ManageClasses = () => {

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    classes.map(classs => <ClassesCard
                        key={classs._id}
                        classs={classs}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;