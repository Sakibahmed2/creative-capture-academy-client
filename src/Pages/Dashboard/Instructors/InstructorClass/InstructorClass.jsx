import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import { FiSettings } from "react-icons/fi";

const InstructorClass = () => {

    const { user } = useContext(AuthContext)
    const [instructorClass, setInstructorClass] = useState()

    useEffect(() => {
        fetch(`https://creative-capturea-academy.vercel.app/instructor-classes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setInstructorClass(data)
            })
    }, [])

    console.log(instructorClass);

    return (
        <div className='w-10/12 mx-auto'>
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
                                    <button className='bg-slate-600 text-lg text-white py-4 px-4 rounded-md'>
                                        <FiSettings />
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