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
import Leadership from "../pages/about/Leadership";
import Chairman from "../pages/about/Chairman";
import Vc from "../pages/about/Vc";
import ProVc from "../pages/about/ProVc";
import Collaboration from "../pages/about/Collaboration";
import Awards from "../pages/about/Awards";
import PermanentCampus from "../pages/about/PermanentCampus";
import Why from "../pages/admissions/Why";
import Undergrad from "../pages/admissions/Undergrad";
import Postgrad from "../pages/admissions/Postgrad";
import AdmissionScholarship from "../pages/admissions/AdmissionScholarship";
import CreditTransfer from "../pages/admissions/CreditTransfer";
import Faq from "../pages/admissions/Faq";
import Calender from "../pages/secondary nav/Calender";
import Training from "../pages/secondary nav/Training";
import Events from "../pages/home/news/Events";
import Library from "../pages/secondary nav/Library";
import Career from "../pages/secondary nav/Career";
import Alumni from "../pages/secondary nav/Alumni";
import Contact from "../pages/secondary nav/Contact";


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
                path: '/about-us/vision-mission',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/about-us/leadership-administration',
                element: <Leadership></Leadership>
            },
            {
                path: '/about-us/chairman-message',
                element: <Chairman></Chairman>
            },
            {
                path: '/about-us/vc-message',
                element: <Vc></Vc>
            },
            {
                path: '/about-us/provc-message',
                element: <ProVc></ProVc>
            },
            {
                path: '/about-us/collaboration',
                element: <Collaboration></Collaboration>
            },
            {
                path: '/about-us/awards-achievements',
                element: <Awards></Awards>
            },
            {
                path: '/about-us/permanent-campus',
                element: <PermanentCampus></PermanentCampus>
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
                path: '/admissions',
                element: <Admissions></Admissions>
            },
            {
                path: '/admissions/why',
                element: <Why></Why>
            },
            {
                path: '/admissions/undergrad-admission',
                element: <Undergrad></Undergrad>
            },
            {
                path: '/admissions/postgrad-admission',
                element: <Postgrad></Postgrad>
            },
            {
                path: '/admissions/scholarship',
                element: <AdmissionScholarship></AdmissionScholarship>
            },
            {
                path: '/admissions/credit-transfer',
                element: <CreditTransfer></CreditTransfer>
            },
            {
                path: '/admissions/faq',
                element: <Faq></Faq>
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
            {
                path: '/academic-calender',
                element: <Calender></Calender>
            },
            {
                path: '/teaching-research',
                element: <Training></Training>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/library',
                element: <Library></Library>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/alumni',
                element: <Alumni></Alumni>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
        ]

    }
])

export default router;