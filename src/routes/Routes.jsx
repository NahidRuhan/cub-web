import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import AboutUs from "../pages/About/AboutUs";
import Academics from "../pages/academics/Academics";
import Admissions from "../pages/admissions/Admissions";
import EventsNews from "../pages/news/EventsNews";
import Cse from "../pages/academics/Cse";
import English from "../pages/academics/English";
import Law from "../pages/academics/Law";
import EEE from "../pages/academics/EEE";
import General from "../pages/academics/General";
import Announcements from "../pages/announcements/Announcements";
import Schools from "../pages/academics/Schools";


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
                path: '/academics',
                element: <Academics></Academics>
            },
            {
                path: '/academics/schools',
                element: <Schools></Schools>
            },
            {
                path: '/academics/departments/cse',
                element: <Cse></Cse>
            },
            {
                path: '/academics/departments/english',
                element: <English></English>
            },
            {
                path: '/academics/departments/law',
                element: <Law></Law>
            },
            {
                path: '/academics/departments/eee',
                element: <EEE></EEE>
            },
            {
                path: '/academics/departments/general',
                element: <General></General>
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