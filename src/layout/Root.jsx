import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
// import TertioryNav from "../shared/TertioryNav";



const Root = () => {
    return (
        <div>
            {/* <TertioryNav></TertioryNav> */}
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;
