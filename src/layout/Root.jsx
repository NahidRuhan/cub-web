import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";



const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;
