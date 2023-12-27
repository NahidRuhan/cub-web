import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
const Calender = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">

                <Link to='https://canadianuv.netlify.app/AllPdf/AcademicCalander/Bi-Semester%20-%20Summer%2023%20(1)%20(1).pdf'><img src="https://canadianuv.netlify.app/AllImage/Academic%20Calander/BiSemester.png" alt="" /></Link>
                <Link to='http://localhost:5173/academic-calender'><img src="https://canadianuv.netlify.app/AllImage/Academic%20Calander/Academic%20Calendar_Fall%202023%20(Tri).jpg" alt="" /></Link>

            </div>
        </div>
    );
};

export default Calender;