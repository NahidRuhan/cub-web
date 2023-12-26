import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import AboutUs from "../pages/About/AboutUs";
import Admissions from "../pages/admissions/Admissions";
import EventsNews from "../pages/news and events/EventsNews";
import General from "../pages/academics/departments/General";
import Announcements from "../pages/announcements/Announcements";
import Schools from "../pages/academics/Schools";
import Center from "../pages/academics/Center";
import Fees from "../pages/academics/Fees";
import Departments from "../pages/academics/departments/Departments";
import Policy from "../pages/academics/Policy";
import Iqac from "../pages/academics/Iqac";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/academics/schools',
                element: <Schools></Schools>
            },
            {
                path: '/academics/departments',
                element: <Departments></Departments>
            },
            {
                path: '/academics/departments/general',
                element: <General></General>
            },
            {
                path: '/academics/center-institutions',
                element: <Center></Center>
            },
            {
                path: '/academics/fees-payment',
                element: <Fees></Fees>
            },
            {
                path: '/academics/policy-procedure',
                element: <Policy></Policy>
            },
            {
                path: '/academics/iqac',
                element: <Iqac></Iqac>
            },
            {
                path: '/admissions',
                element: <Admissions></Admissions>
            },
            {
                path: '/news-events',
                element: <EventsNews></EventsNews>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/announcements',
                element: <Announcements></Announcements>,
                loader: () => fetch('/announcement.json')
            },
            
        ]

    }
])

export default router;