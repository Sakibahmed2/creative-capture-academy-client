import React from 'react';

const InstructorsCard = ({instructor}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-72" src={instructor?.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4 bg-base-300">
                <h2 className="card-title text-2xl mb-4">{instructor?.name}</h2>
                <p>Email : {instructor?.email}</p>

            </div>
        </div>
    );
};

export default InstructorsCard;