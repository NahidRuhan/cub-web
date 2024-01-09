import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import one from "../../assets/Awards/1.jpg";
import two from "../../assets/Awards/2.jpg";
import three from "../../assets/Awards/3.jpg";
import four from "../../assets/Awards/4.webp";
import five from "../../assets/Awards/5.png";
import six from "../../assets/Awards/6.webp";
const Awards = () => {
  return (
    <div>
      <SecondaryNav></SecondaryNav>

      <LogoNav></LogoNav>
      <TertioryNav></TertioryNav>

      <div className="w-full h-52 bg-slate-700 flex justify-center items-center text-center text-white">
        <h1 className="text-3xl">Awards And Achievements</h1>
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col items-center">
        <img className="w-1/2" src={one} alt="" />
        <img className="w-1/2" src={two} alt="" />
        <img className="w-1/2" src={three} alt="" />
        <img className="w-1/2" src={four} alt="" />
        <img className="w-1/2" src={five} alt="" />
        <img className="w-1/2" src={six} alt="" />
        <p>
          Canadian University of Bangladesh has been approved by the Ministry of
          Education, Government of Bangladesh and by the University Grants
          Commission (UGC). Canadian University has made a praiseworthy success
          within a short period of time and is growing rapidly in terms of
          academic progress. 15 Summa Cum Laude students in degrees such as
          Bachelor of Science in Electrical and Electronic Engineering, Bachelor
          of Science in Shipping and Maritime Science and Master of Business
          Administration in December 2022. Chancellor and Vice Chancellor award
          holders from various degrees are in successful career paths. 13
          multitaskers graduating our Master of Business Administration and
          thriving in their careers.
        </p>
      </div>
    </div>
  );
};

export default Awards;
