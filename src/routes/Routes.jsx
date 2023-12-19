import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import AboutUs from "../pages/About/AboutUs";
import Academics from "../pages/academics/Academics";
import Admissions from "../pages/admissions/Admissions";
import EventsNews from "../pages/news/EventsNews";


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
                path: '/admissions',
                element: <Admissions></Admissions>
            },
            {
                path: '/news-events',
                element: <EventsNews></EventsNews>,
                loader: () => fetch('/news.json')
            },
        ]
    }
])

export default router;