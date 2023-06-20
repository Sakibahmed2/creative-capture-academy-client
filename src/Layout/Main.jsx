import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import NabBar from '../Pages/Shared/Navbar/NabBar';

const Main = () => {
    return (
        <div>
            <NabBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;