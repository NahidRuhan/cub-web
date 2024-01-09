import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import rana from "../../assets/Alumni/Rana_page-0001.jpg"
import nomrota from "../../assets/Alumni/Namrata_page-0001.jpg"
import likhon from "../../assets/Alumni/Likhon (2)_page-0001.jpg"
import samin from "../../assets/Alumni/samin_page-0001.jpg"
import PP from "../../assets/Alumni/Pranto_page-0001.jpg"

const Alumni = () => {
    return (
        <div>

            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="w-full h-52 bg-slate-700 flex justify-center items-center text-center text-white">
  <h1 className="text-3xl">Alumni Canadian University Of Bangladesh
</h1>
</div>

<img className="w-2/5 mx-auto" src="https://canadianuv.netlify.app/Alumni/Alumni%201.jpg" alt="" />

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">

<img className="" src={rana} alt="" />
        <img className="" src={nomrota} alt="" />
        <img className="" src={PP} alt="" />
        <img className="" src={likhon} alt="" />
        <img className="" src={samin} alt="" />
</div>

<div className="flex flex-col gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl pb-10">
    <p>Our alumni students have made their mark globally, in North America, Europe, Australia, one can find them in respectable positions. Their story of success warms our hearts with pride.</p>
    <p><span className="text-red-700">Md. Mahbubul Islam</span> is an inspiring alumnus of the Canadian University of Bangladesh (CUB) who has achieved remarkable milestones in his career. He is currently serving as the First Assistant Vice-President at BRAC Bank.</p>
    <p>Md. Mahbubul Islam is an inspiring alumnus of the Canadian University of Bangladesh (CUB) who has achieved remarkable milestones in his career. He is currently serving as the First Assistant Vice-President at BRAC Bank.</p>
    <p>And <span className="text-red-700">Majid Ahmed Masum</span> is the first Assistant Vice President of Premier Bank.</p>
</div>
            
        </div>
    );
};

export default Alumni;