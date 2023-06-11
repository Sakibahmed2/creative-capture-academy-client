import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const [myClass, setMyClass] = useState()

    useEffect(() => {
        fetch(`https://creative-capturea-academy.vercel.app/carts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClass(data)
            })
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure ?',
            text: "you want to delete this class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })
    }

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
                                <td>{index + 1}</td>
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
                                    <button onClick={() => handleDelete(classs?._id)} className="bg-red-600 text-white py-4 px-4 rounded-md"><FaTrashAlt /></button>
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