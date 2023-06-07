import React, { useEffect, useState } from 'react';
import Classs from './Classs';

const Classes = () => {
    const [classes, setClasses] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])


   

    return (
        <div className='grid grid-cols-2 gap-8'>
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