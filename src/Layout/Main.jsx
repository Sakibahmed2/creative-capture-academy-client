import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NabBar from '../Pages/Shared/Navbar/NabBar';

const Main = () => {
    return (
        <div>
            <NabBar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;