import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import { Link } from "react-router-dom";
import banner from "../../assets/announcement.jpg"

const Why = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>
            <div>
            <img
          className="w-full h-96"
          src={banner}
          alt=""
        />
      </div> 
      <div className=" bg-slate-300">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <Link to='/admissions'><p className="hover:underline">Admissions</p></Link>
            <p>/</p>
            <p>Why at Cub</p>
        </div>
        </div>
        <div className="py-10 font-normal text-2xl text-violet-600 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <p>Prominent faculty members with foreign degree</p>
            <p>North American standard curriculum</p>
            <p>Diverse co-curricular activities</p>
            <p>Career counselling</p>
            <p>Internship opportunities</p>
            <p>Job placement</p>
            <hr />
        </div>
        </div>
    );
};

export default Why;