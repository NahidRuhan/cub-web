import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const Awards = () => {
  return (
    <div>
      <LogoNav></LogoNav>
      <SecondaryNav></SecondaryNav>
      <TertioryNav></TertioryNav>

      <div className="w-full h-96 bg-yellow-700 flex justify-center items-center text-center text-white">
        <h1 className="text-3xl">Awards And Achievements</h1>
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <img src="https://canadianuv.netlify.app/Achievements/img%20(1).jpg" alt="" />
        <img src="https://canadianuv.netlify.app/Achievements/img%20(2).jpg" alt="" />
        <img src="https://canadianuv.netlify.app/Achievements/img%20(3).jpg" alt="" />
        <img src="https://canadianuv.netlify.app/Achievements/img%20(4).jpg" alt="" />
        <img src="https://canadianuv.netlify.app/Achievements/img%20(5).jpg" alt="" />
        <img src="https://canadianuv.netlify.app/Achievements/img%20(6).jpg" alt="" />
        <p>Canadian University of Bangladesh has been approved by the Ministry of Education, Government of Bangladesh and by the University Grants Commission (UGC). Canadian University has made a praiseworthy success within a short period of time and is growing rapidly in terms of academic progress. 15 Summa Cum Laude students in degrees such as Bachelor of Science in Electrical and Electronic Engineering, Bachelor of Science in Shipping and Maritime Science and Master of Business Administration in December 2022. Chancellor and Vice Chancellor award holders from various degrees are in successful career paths. 13 multitaskers graduating our Master of Business Administration and thriving in their careers.</p>
      </div>
    </div>
  );
};

export default Awards;
