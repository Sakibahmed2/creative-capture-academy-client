import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navOption = <>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>


    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navOption}
                    </ul>
                </div>
                <h1 className='text-3xl font-semibold font-abc'>CreativeCapture Academy</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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