import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaBook, FaClipboardList, FaHome, FaUsers, FaChalkboardTeacher, FaListAlt, FaList } from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const Dashboard = () => {

    const { user } = useContext(AuthContext)

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side bg-sky-500">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">
                        {/* Sidebar content here */}

                        <div className='text-white text-center mt-8 mb-8'>
                            <h1 className='md:text-4xl  font-extrabold font-abc md:top-0 top-6 relative custom-font '>C C A</h1>
                            <span className='relative top-0 right-15 opacity-0 md:opacity-100 '>Creative Capture Academy</span>
                        </div>

                        <div className='text-center mb-8'>
                            <div className="avatar">
                                <div className="w-16 rounded-full border-2 border-gray-500">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <span className='block text-lg font-semibold'>{user?.displayName}</span>
                            <span className='border-b border-black '>{user?.email}</span>
                        </div>


                        {
                            // Admin 
                            isAdmin ? <>

                                <li><NavLink to='dashboard/manageclasses'> <FaClipboardList /> Manage Classes</NavLink></li>

                                <li><NavLink to='dashboard/manageusers'> <FaUsers /> Manage Users</NavLink></li>

                            </> :


                                // Instructor 
                                isInstructor ? <>
                                    <li><NavLink to='dashboard/instructorclass'> <ImBooks /> My Classes</NavLink></li>

                                    <li><NavLink to='dashboard/addaclass'> <ImBook /> Add a class</NavLink></li>


                                </> :

                                    // Student

                                    <>
                                        <li>
                                            <NavLink to='dashboard/myclasses'>
                                                <FaListAlt /> My Selected Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='dashboard/enrolledclasses'>
                                                <FaList /> My Enrolled Classes
                                            </NavLink>
                                        </li>
                                    </>
                        }

                        <div className='divider'></div>

                        <li><NavLink to='/'> <FaHome /> Home</NavLink></li>
                        <li><NavLink to='/classes'> <FaBook /> Classes</NavLink></li>
                        <li><NavLink to='/classes'> <FaChalkboardTeacher /> Instructor</NavLink></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;