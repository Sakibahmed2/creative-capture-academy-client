import React, { useEffect, useState } from 'react';
import Classs from './Classs';

const Classes = () => {
    const [classes, setClasses] = useState(null)

    useEffect(() => {
        fetch('https://creative-capturea-academy.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])


    return (
        <div className='grid md:grid-cols-3 pt-20 mb-8 w-10/12 mx-auto gap-8'>
            {
                classes?.map(classs => <Classs
                    key={classs._id}
                    classs={classs}
                ></Classs>)
            }
        </div>
    );
};

export default Classes;