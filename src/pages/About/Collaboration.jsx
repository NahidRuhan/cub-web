import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const Collaboration = () => {
    return (
        <div className="">
            <SecondaryNav></SecondaryNav>

<LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="bg-logoRed text-white">
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 h-52 items-center">

                <h1 className="text-3xl md:text-4xl lg:text-6xl py-3">Collaboration</h1>
                <div className="flex gap-3">
                <Link to='/'><p className="hover:underline">Home</p></Link>
                <p>/</p>
                <p>Collaboration</p>                    
                </div>

            </div>                
            </div>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5 text-justify">

                <div>
                    <h1 className="text-lg font-normal text-[#f4253f]">Bangladesh Army and Canadian University of Bangladesh Sign Memorandum of Understanding</h1>
                    <hr className="h-1 bg-black" />                    
                </div>


                <p>Canadian University of Bangladesh (CUB) is a prestigious private university that has been playing an important role in higher education in Bangladesh. On November 22, 2023, a memorandum of understanding (MoU) was signed between the Bangladesh Army and CUB. The ceremony was attended by The chief of Army Staff General S M Shafiuddin Ahmed, SBP (BAR), OSP, ndu, psc, Ph.D., and Chairman of the CUB Board of Trustees Dr. Chowdhury Nafeez Sarafat. In addition, all PSOs of the Army Headquarters, directors of various departments, military officers and faculty and staff of CUB attended the ceremony.</p>

                <div className="flex justify-center">
                <img className="w-1/2" src="https://canadianuv.netlify.app/Images/mou1.jpg" alt="" />
                </div>


                <p className="py-10">The signing of the MoU with a prestigious institution like the Bangladesh Army is a significant milestone for CUB. As a result, the door to cooperation in higher education has been opened between the two institutions. Through the signing of the MoU, members of the Bangladesh Army will receive special benefits in the areas of higher education and research at CUB.</p>

                <img className="w-1/2 mx-auto" src="https://canadianuv.netlify.app/Images/mou2.jpg" alt="" />


                <p className="py-10">The signing ceremony was organized jointly by the Directorate of Education and the Directorate of Military Training of the Bangladesh Army. On behalf of the Bangladesh Army, Director of Directorate of Education Brigadier General Md Rezaul Islam, PSC, PhD and on behalf of CUB, Vice-Chancellor Professor Dr. Md Gias Uddin Ahasan signed the MoU.</p>

            </div>
            
        </div>
    );
};

export default Collaboration;