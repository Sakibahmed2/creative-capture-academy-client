import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorFile from '../../assets/95560-error-404.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    const { error, status } = useRouteError();



    return (
        <div className=' flex justify-center items-center'>
            <Lottie 
            animationData={errorFile}
            ></Lottie>
            <Link to='/'>
                <button className='relative top-52 md:top-[250px] right-40 md:right-80 btn bg-sky-500 text-white'>Go back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;