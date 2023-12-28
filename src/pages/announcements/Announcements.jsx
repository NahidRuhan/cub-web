import { Link, useLoaderData } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import AnnouncementComponent from "./AnnouncementComponent";
import banner from "../../assets/announcement.jpg"

const Announcements = () => {
    const announcement = useLoaderData();
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
            <p>News And Events</p>
        </div>
        </div>
        
        <h1 className="text-center text-red-500 text-3xl my-5">Announcements and Notice</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
            {
                announcement.map((announcement,ind)=>(<AnnouncementComponent key={ind} announcement={announcement}></AnnouncementComponent>))
            }
        </div>            
        </div>
    );
};

export default Announcements;