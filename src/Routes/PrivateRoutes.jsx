import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();



    if (loading) {
        return <span className="loading loading-spinner"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;