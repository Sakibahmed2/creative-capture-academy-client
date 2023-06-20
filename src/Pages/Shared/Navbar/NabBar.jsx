import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NabBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors </Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {user && <li><Link to='/dashboard '>Dashboard </Link></li>}
    </>


    return (
        <div className="w-full bg-gray-800 md:bg-black shadow-lg md:bg-opacity-40 text-white max-w-screen-xl mx-auto fixed z-10 md:h-16">
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="flex justify-between items-center w-full">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <div className='md:w-full'>
                                <h1 className='md:text-4xl text-xl text-sky-500 font-extrabold md:left-0 left-14  md:top-0 top-5 absolute custom-font'>C C A</h1>
                                <span className='relative top-4 right-15 opacity-0 md:opacity-100 '>Creative Capture Academy</span>
                            </div>
                        </div>
                        {/* Navigation links */}
                        <div className="hidden sm:block sm:ml-6 ">
                            <ul className="flex space-x-4 justify-end font-semibold text-lg">
                                {navOption}
                            </ul>
                        </div>
                        <div className='flex justify-center items-center'>
                            {user &&
                                <div className="avatar">
                                    <div className="w-12 rounded-full border-2 border-gray-500">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            }

                            {user ?
                                <button onClick={logOut} className='custom-btn ml-2 '>Logout</button> :
                                <Link to='/login' className='custom-btn ml-2 '>Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>



            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <ul className="px-2 pt-2 pb-3 space-y-1">
                    {navOption}
                </ul>
            </div>
        </div>
    );
};

export default NabBar;