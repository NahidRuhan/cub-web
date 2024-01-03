import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import banner from "../../assets/Leadership.jpg"

const Leadership = () => {
  return (
    <div>

        <SecondaryNav></SecondaryNav>
        <LogoNav></LogoNav>
        <TertioryNav></TertioryNav>

        <img
          className="w-full h-96"
          src={banner}
          alt=""
        />  
            <div className=" bg-slate-300 hidden md:flex">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
          <Link to="/">
            <p className="hover:underline">Home</p>
          </Link>
          <p>/</p>
          <Link to="/about-us/vision-mission">
            <p>About Us</p>
          </Link>
          <p>/</p>
          <p>Leadership And Administration</p>
        </div>
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl flex flex-col gap-5 py-10">
        <div className="flex flex-col gap-3 py-20">
          <div className="lg:w-max">
            <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">
              Board Of Trustees
            </h1>
            <hr className="w-auto h-1  bg-[#F4253F]" />
          </div>
          <p>
            The Board of Trustees is the greates policy maker incharge for
            Canadian University of Bangladesh. It ensures the greatest
            educational and administrative standards.
          </p>
        </div>
        <div className="flex flex-col gap-3 py-20">
          <div className="lg:w-max">
            <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">
            About Chairman
            </h1>
            <hr className="w-auto h-1  bg-[#F4253F]" />
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
          <p className="text-justify">
          DR. CHOWDHURY NAFEEZ SARAFAT, a prominent entrepreneur, investor, and philanthropist, is widely recognized for his contributions to Bangladesh&apos;s sustainable economic development and SDG achievements. His career includes pivotal roles in The Standard Chartered Bank, the establishment of &apos;RACE&apos;, Bangladesh&apos;s largest Asset Management Company, and raising over $2 billion through various financial instruments. He has also ventured into the hospitality sector and sponsored Chains like Marriot group, chaired a private bank, and spearheaded educational initiatives, notably founding the Canadian University of Bangladesh implementing world class Canadian Education system in Bangladesh. He is also Managing Director of Unique Meghnaghat Power (600 MW power plant in partnership with General Electric US and Nebras Power Govt. of Qatar), Sponsor Director of LIC Bangladesh, the multinational insurance giant (in partnership with Govt. of India) and the Vice Chairman of Frontier Towers Bangladesh, a multinational tower sharing company in partnership with KKR (Kohlberg Kravis Roberts), the world&apos;s second-largest private equity. Dr. Sarafat is a trailblazer in journalism and an active participant in international forums such as 42nd G7 Summit in Japan, UN General Assembly 2016, 2017, 2018, 2019, and 2020, Global Fund Fifth Replenishment Conference 2016 in Montreal, and Budapest Water Summit 2016 which showcases his global network. He completed his MBA from the University of New Castle (UK), Masters in Corporate Social Responsibility from London Graduate School (UK), and Doctorate of Business Administration (DBA) from Commonwealth University (UK). Dr. Nafeez is an inspirational individual who is inspiring millions of youths of Bangladesh and cross-borders.</p>
          <img src="https://canadianuv.netlify.app/Images/Chariman_2.jpg" alt="" />
          </div>

        </div>
        <div className="flex flex-col gap-3 py-20">
          <div className="lg:w-max">
            <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">
              Syndicate
            </h1>
            <hr className="w-auto h-1  bg-[#F4253F]" />
          </div>
          <p>
          The Syndicate is the highest executive body that exercises administrative and supervisory control over the academic, administrative and management activities of the University.
          </p>
        </div>
        <div className="flex flex-col gap-3 py-20">
          <div className="lg:w-max">
            <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">
              Academic Council
            </h1>
            <hr className="w-auto h-1  bg-[#F4253F]" />
          </div>
          <p>
          The Academic Council recommends the educational policies of the University and also determines the curricula and courses that can help achieve high educational standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
