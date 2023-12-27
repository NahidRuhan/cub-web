import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const Alumni = () => {
    return (
        <div>

            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="w-full h-96 bg-yellow-700 flex justify-center items-center text-center text-white">
  <h1 className="text-3xl">Alumnni Canadian University Of Bangladesh
</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">

    <img src="https://canadianuv.netlify.app/Alumni/CSE%20Alumni/GSM%20Rana.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/CSE%20Alumni/Namrata%20Datta.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/CSE%20Alumni/Pranto%20Paul.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/Alumni%201.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/Alumni%202.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/Alumni%203.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/Alumni%204.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/Alumni%205.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/mahbub.jpg" alt="" />
    <img src="https://canadianuv.netlify.app/Alumni/majid.jpg" alt="" />

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