import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: '/classes',
                element: <Classes />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // Admin related routes
            {
                path: 'dashboard/manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'dashboard/manageclasses',
                element: <ManageClasses />
            }
        ]
    }
]);


export default router;