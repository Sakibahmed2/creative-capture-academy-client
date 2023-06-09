import React from 'react';

const InstructorCard = ({ instructor }) => {
    console.log(instructor);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={instructor?.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <h2 className="card-title text-3xl mb-4">{instructor?.name}</h2>
                <p>Email : {instructor?.email}</p>

            </div>
        </div>
    );
};

export default InstructorCard;