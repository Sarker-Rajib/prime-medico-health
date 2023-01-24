import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Doctors from "../Pages/Doctors/Doctors";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";
import Laboratory from "../Pages/Laboratory/Laboratory";
import Login from "../Pages/Login/Login";
import MedicineShop from "../Pages/MedicineShop/MedicineShop";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <>h</>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/doctors',
                element: <Doctors />
            },
            {
                path: '/medicineshop',
                element: <MedicineShop />
            },
            {
                path: '/laboratory',
                element: <Laboratory />
            },
        ]
    },
    {
        path: '*',
        element: <Error404 />
    }
]);