import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';

const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const [myClass, setMyClass] = useState()

    useEffect(() => {
        fetch(`https://creative-capturea-academy.vercel.app/carts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClass(data)
            })
    }, [])

    console.log(myClass);

    return (
        <div className='w-10/12 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClass?.map((classs, index) => <tr key={classs?._id}>
                                <td>{index +1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classs?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>{classs?.name}</td>
                                <td> $ {classs?.price}</td>
                                <th>
                                    <button className="bg-red-600 text-white py-4 px-4 rounded-md"><FaTrashAlt /></button>
                                </th>
                            </tr>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;