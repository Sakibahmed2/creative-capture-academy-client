import React from 'react';

const ClassesCard = ({ classs }) => {
    console.log(classs);

    const { _id, name, image, instructorName, instructorEmail, price, availableSeats, status } = classs || {};

    const handleApprove = (id) => {
        console.log(id);
        fetch(`https://creative-capturea-academy.vercel.app/classes/permission/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg hover:shadow-2xl  transition duration-500 ease-in-out">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='text-start mt-4 font-semibold'>
                        <p>Instructor name : {instructorName}</p>
                        <p>Instructor email : {instructorEmail}</p>
                        <div className='flex mt-2'>
                            <p>Seat : {availableSeats}</p>
                            <p>Price : {price}</p>
                        </div>
                    </div>
                    <div className="card-actions w-96 mx-auto mt-4">
                        <button onClick={() => handleApprove(_id)} className="custom-btn btn btn-sm" >Approve</button>
                        <button className="custom-btn btn btn-sm">Deny </button>
                        <button className="custom-btn btn btn-sm">Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;