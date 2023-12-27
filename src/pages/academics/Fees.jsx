import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import Tables from "../../components/Tables";
import Tables2 from "../../components/Tables2";

const Fees = () => {

    return (
        <div>
            <SecondaryNav></SecondaryNav>

            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="bg-logoRed text-white">
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 h-60 items-center">

                <h1 className="text-3xl md:text-4xl lg:text-6xl py-3">Fees and Payment</h1>
                <div className="flex gap-3">
                <Link to='/'><p className="hover:underline">Home</p></Link>
                <p>/</p>
                <p>Fees and Payment</p>                    
                </div>

            </div>                
            </div>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 ">
            <h1 className="text-2xl text-red-700 py-5">Fees (Applicable for all students from 1 September, 2023):</h1>
            <Tables></Tables>                
            </div>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 ">
            <h1 className="text-2xl text-red-700 py-5">Fees (till Summer 2023):</h1>
            <Tables2></Tables2>                
            </div>



            
        </div>
    );
};

export default Fees;