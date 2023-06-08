import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorFile from '../../assets/80698-404-error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    const { error, status } = useRouteError();



    return (
        <div className='h-96'>
            <Lottie animationData={errorFile} ></Lottie>
            <Link to='/'>
                <button className='absolute top-32 custom-btn'>Go back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;