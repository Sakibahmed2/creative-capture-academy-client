import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Classs = ({ classs }) => {

    const { user } = useContext(AuthContext)

    const { _id, instructorName, availableSeats, image, price, name } = classs || {}

    const handleAddToCart = classs => {
        console.log(classs);
        if (user && user.email) {
            const cartClasss = { classsId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartClasss)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Instructorname : {instructorName}</p>
                    <p>available Seats : {availableSeats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(classs)} className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classs;