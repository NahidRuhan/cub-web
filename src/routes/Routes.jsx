import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import AboutUs from "../pages/About/AboutUs";
import Academics from "../pages/academics/Academics";
import Admissions from "../pages/admissions/Admissions";


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
        ]
    }
])

export default router;