import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AllOurServices from "../Pages/AllOurServices/AllOurServices";
import DentalCare from "../Pages/DentalCare/DentalCare";
import Doctors from "../Pages/Doctors/Doctors";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";
import Laboratory from "../Pages/Laboratory/Laboratory";
import Login from "../Pages/Login/Login";
import MedicineShop from "../Pages/MedicineShop/MedicineShop";
import MoreAboutUs from "../Pages/MoreAboutUs/MoreAboutUs";
import OurGoals from "../Pages/OurGoals/OurGoals";
import RadiologyImaging from "../Pages/RadiologyImaging/RadiologyImaging";
import SampleCollection from "../Pages/SampleCollection/SampleCollection";
import SignUp from "../Pages/SignUp/SignUp";
import Surgeons from "../Pages/Surgeons/Surgeons";
import Telemedicine from "../Pages/Telemedicine/Telemedicine";

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
            {
                path: '/samplecollection',
                element: <SampleCollection />
            },
            {
                path: '/r&i',
                element: <RadiologyImaging />
            },
            {
                path: '/telemedicine',
                element: < Telemedicine />
            },
            {
                path: '/surgeons',
                element: < Surgeons />
            },
            {
                path: '/dentalcare',
                element: <DentalCare />
            },
            {
                path: '/aboutus',
                element: <MoreAboutUs />
            },
            {
                path: '/ourgoal',
                element: <OurGoals />
            },
            {
                path: '/ourservices',
                element: <AllOurServices />
            },
        ]
    },
    {
        path: '*',
        element: <Error404 />
    }
]);