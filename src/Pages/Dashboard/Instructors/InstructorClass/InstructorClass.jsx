import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import InsClassTable from './InsClassTable';
import { FaTrashAlt } from 'react-icons/fa';

const InstructorClass = () => {

    const { user } = useContext(AuthContext)
    const [instructorClass, setInstructorClass] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/instructor-classes?email=sakibb@gmail.com`)
            .then(res => res.json())
            .then(data => {
                setInstructorClass(data)
            })
    }, [])

    console.log(instructorClass);

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table table-lg table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Enrold Student</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClass?.map((classs, index ) => 
                            <tr key={classs?._id}>
                                <th>{index + 1}</th>
                                <td>{classs?.name}</td>
                                <td>{classs?.status}</td>
                                <td>{}</td>
                                <td>
                                    <button className='bg-red-600 text-white py-4 px-4 rounded-md'>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClass;