import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const Chairman = () => {
    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>


<div className="w-full h-52 bg-slate-700 flex justify-center items-center text-center text-white">
  <h1 className="text-3xl">Message From Chairman</h1>
</div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
<div className="lg:w-1/2 relative">
        <img className="w-full lg:w-3/4 rounded-lg" src="https://canadianuv.netlify.app/Images/Chariman_2.jpg" alt="Chairman" />
        <div className="absolute bottom-5 left-5 text-white">
        <p className="text-lg font-normal text-[#f4253f]">Dr. Chowdhury Nafeez Sarafats</p>
            <p className="text-base font-normal text-[#f4253f]">Founder & Chairman</p>
            <p className="text-base font-normal text-[#f4253f]">Canadian University of Bangladesh</p>            
        </div>

    </div>
    <div className="lg:w-1/2">
        <div className="flex flex-col gap-5 text-justify">
            <h1 className="text-xl font-semibold text-logoRed">&quot;To all my dear students - Work hard. There is no shortcut to success.&quot;</h1>
            <p className="">Welcome to the Canadian University of Bangladesh! Established in 2016 under the Private Universities Act of 2010, our university holds approval from the Ministry of Education, Government of Bangladesh, and the University Grants Commission (UGC).</p>
            <p>We take pride in our swift progress and continuous academic growth, dedicated to offering quality education. Our vision is to stand out internationally in our chosen fields by embracing Canadian perspectives in learning, research, and application, rooted in respect for diverse cultures and Bangladeshi values. Through collaboration and cooperation, we aim to realize our vision and fulfill our mission through education, research, entrepreneurship, and community service.</p>
            <p>Our campus boasts excellent infrastructure and facilities conducive to your learning journey. Moreover, we provide various opportunities for engaging in extracurricular activities, fostering the development of leadership qualities.</p>
            <p>Wishing you success in your educational endeavors and future career pursuits.</p>
        </div>            
    </div>
</div>
</div>
            
        </div>
    );
};

export default Chairman;