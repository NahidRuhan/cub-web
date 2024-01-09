import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import spring from "../../assets/Academic Calendar_(Tri) Spring 2024.jpg"
import springBi from "../../assets/Academic Calendar_(Bi) Spring 2024.jpg"
const Calender = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col items-center">

                <Link to='https://drive.google.com/file/d/1ctUxz9vdOK7NXxW6kgjZvus64TAqP27E/view?usp=sharing'><img src={spring} alt="" /></Link>
                <Link to='https://drive.google.com/file/d/1P-vduq2Jj3GA89iHTqoX2vh_98GsMgTL/view?usp=sharing'><img src={springBi} alt="" /></Link>

            </div>
        </div>
    );
};

export default Calender;