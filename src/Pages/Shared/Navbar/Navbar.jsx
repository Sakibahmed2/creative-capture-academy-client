import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors </Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard '>Dashboard </Link></li>
    </>

    return (
        <div className="navbar bg-black mb-10 shadow-lg bg-opacity-40 lg:text-white max-w-screen-xl mx-auto fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navOption}
                    </ul>
                </div>
                <div>
                    <h1 className='md:text-3xl text-rose-500 font-extrabold font-abc md:top-0 top-6 relative'>C C A</h1>
                    <span className='relative top-0 right-15 opacity-0 md:opacity-100 '>Creative Capture Academy</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {navOption}
                </ul>
            </div>

            <div className="navbar-end">


                {user ?
                    <div className="avatar">
                        <div className="w-12 rounded-full border-2 border-gray-500">
                            <img src={user?.photoURL} />
                        </div>
                    </div> :
                    <span className='text-xl  rounded-full p-2 text-white bg-slate-800'><FaUser /></span>
                }

                {user ?
                    <button onClick={logOut} className='custom-btn ml-2'>Logout</button> :
                    <Link to='/login' className='custom-btn ml-2'>Login</Link>
                }

            </div>
        </div>
    );
};


export default Navbar;