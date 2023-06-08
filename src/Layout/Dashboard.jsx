import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side bg-rose-400">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        {/* Sidebar content here */}

                        
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;