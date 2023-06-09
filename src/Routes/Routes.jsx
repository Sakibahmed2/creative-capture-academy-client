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
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import AddClass from "../Pages/Dashboard/Instructors/AddClass/AddClass";
import InstructorClass from "../Pages/Dashboard/Instructors/InstructorClass/InstructorClass";
import MyClasses from "../Pages/Dashboard/Student/MyClasses/MyClasses";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
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
        errorElement: <ErrorPage />,
        children: [
            // Admin related routes
            {
                path: 'dashboard/manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'dashboard/manageclasses',
                element: <ManageClasses />
            },


            // Instructor related routes
            {
                path: 'dashboard/addaclass',
                element: <AddClass />
            },
            {
                path: 'dashboard/instructorclass',
                element: <InstructorClass />
            },



            // Student routes 
            {
                path: 'dashboard/myclasses',
                element: <MyClasses />
            },
            {
                path: 'dashboard/enrolledclasses',
                element: <EnrolledClasses />
            },
        ]
    }
]);


export default router;