import { Outlet, ScrollRestoration } from "react-router-dom";
import PrimaryNav from "../shared/PrimaryNav";
import Footer from "../shared/Footer";



const Root = () => {
    return (
        <div>
            <PrimaryNav></PrimaryNav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;
