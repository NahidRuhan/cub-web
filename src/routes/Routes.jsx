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
import Center from "../pages/academics/Center";
import FounderMessage from "../new_pages/founder";
import ProVCMessage from "../new_pages/provcmessage";
import VCMessage from "../new_pages/vcmessage";
import Campus from "../new_pages/permanentcampus";
import Collaboration from "../new_pages/collaboration";
import Awards from "../new_pages/awards";
import AcademicCalender from "../new_page_arnob/academic_calender";
import Alumni from '../new_page_arnob/alumni';
import Career from '../new_page_arnob/career';
import Events from "../pages/home/news/Events";
import Library from "../new_page_arnob/library";
import TeachingResearch from "../new_page_arnob/teaching_research";
import Contact from "../new_page_arnob/contact";

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
                path: '/academics/center-institutions',
                element: <Center></Center>
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

            // New Routes by Rajin
            {
                path: '/about-us/chairmen-message/',
                element: <FounderMessage></FounderMessage>
            },
            {
                path: '/about-us/provc-message/',
                element: <ProVCMessage></ProVCMessage>
            },
            {
                path: '/about-us/vc-message/',
                element: <VCMessage></VCMessage>
            },
            {
                path: '/about-us/collaboration/',
                element: <Collaboration></Collaboration>
            },
            {
                path: '/about-us/permanent-campus/',
                element: <Campus></Campus>
            },
            {
                path: '/about-us/awards/',
                element: <Awards></Awards>
            },

            // Routes by Arnob
            {
                path: '/academic-calender/',
                element: <AcademicCalender></AcademicCalender>
            },
            {
                path: '/alumni/',
                element: <Alumni></Alumni>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
                path: '/teaching-research',
                element: <TeachingResearch></TeachingResearch>
            },
            
        ]

    }
])

export default router;