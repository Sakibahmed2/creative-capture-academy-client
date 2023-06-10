import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Classs = ({ classs }) => {

    const { user } = useContext(AuthContext)

    const { _id, instructorName, availableSeats, image, price, name } = classs || {}

    const handleAddToCart = classs => {
        if (user && user.email) {
            const cartClasss = { classsId: _id, name, image, price, email: user.email }
            fetch('https://creative-capturea-academy.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartClasss)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <div className='mt-4'>
                        <p>Instructorname : {instructorName}</p>
                        <p>available Seats : {availableSeats}</p>
                        <p>Price : {price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(classs)} className="custom-btn">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classs;