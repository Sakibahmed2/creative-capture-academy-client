import React from 'react';

const PopularClassCard = ({ popular }) => {
    const { _id, instructorName, availableSeats, image, price, name } = popular || {};

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <h2 className="card-title text-3xl">{name}</h2>
                <div className='mt-4 '>
                    <p>Instructorname : {instructorName}</p>
                    <p>available Seats : {availableSeats}</p>
                    <p>Price : $ {price}</p>
                </div>
                
            </div>
        </div>
    );
};

export default PopularClassCard;