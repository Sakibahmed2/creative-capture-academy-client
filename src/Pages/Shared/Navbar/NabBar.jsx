import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NabBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')


    const { user, logOut } = useContext(AuthContext)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }




    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors </Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {user && <li><Link to='/dashboard '>Dashboard </Link></li>}
        {user ?
            <button onClick={logOut} className='custom-btn md:hidden'>Logout</button> :
            <Link to='/login' className='custom-btn md:hidden'>Login</Link>
        }
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
                                <button onClick={logOut} className='custom-btn ml-2 hidden md:collapse'>Logout</button> :
                                <Link to='/login' className='custom-btn ml-2 '>Login</Link>
                            }

                            <div className='text-white pt-1 ml-4'>
                                <label className="swap swap-rotate ">

                                    {/* this hidden checkbox controls the state */}
                                    <input onChange={handleToggle} type="checkbox" />

                                    {/* sun icon */}
                                    <svg className="swap-on fill-current w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>

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