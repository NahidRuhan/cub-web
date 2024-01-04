import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import { Link } from "react-router-dom";
import banner from "../../assets/admission.png"

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
        <div className="py-10 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl flex flex-col gap-5">
            <div>
                <p className="font-normal text-2xl text-logoRed">Prominent faculty members with foreign degree</p>
                <p>Our faculty comprises accomplished scholars who have obtained degrees from prestigious international institutions. Their diverse academic backgrounds enrich the educational experience, providing students with a global perspective. This esteemed cadre of professors fosters an environment conducive to comprehensive learning, preparing students for success in an interconnected global landscape.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className=" font-normal text-2xl text-logoRed">North American standard curriculum</p>
                <p>Our curriculum adheres to North American standards, ensuring a high-quality and globally recognized education. It is meticulously designed to foster critical thinking, practical skills, and industry relevance. This commitment to excellence prepares students for success in a rapidly evolving global landscape, equipping them with the knowledge and skills demanded by North American educational standards.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className=" font-normal text-2xl text-logoRed">Diverse co-curricular activities</p>
                <p>Engage in a vibrant array of co-curricular activities at the Canadian University of Bangladesh. Our diverse offerings include sports, cultural events, workshops, and community service initiatives. Students have the opportunity to participate in clubs and organizations that cater to various interests, fostering teamwork, leadership, and personal development. These activities not only enrich the academic experience but also contribute to a well-rounded education, preparing students for success in both their professional and personal lives.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className=" font-normal text-2xl text-logoRed">Career counselling</p>
                <p>Career counseling at the Canadian University of Bangladesh is a comprehensive and personalized service aimed at guiding students towards informed and strategic career decisions. Our experienced counselors work closely with students to assess their interests, skills, and aspirations, helping them identify suitable career paths. Through one-on-one sessions, personality assessments, and industry insights, we facilitate a deeper understanding of various professions. Additionally, we provide information on current job market trends, industry demands, and potential growth areas. The goal is to empower students with the knowledge and confidence needed to make informed career choices and embark on a successful professional journey.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className=" font-normal text-2xl text-logoRed">Internship opportunities</p>
                <p>At the Canadian University of Bangladesh, we prioritize hands-on learning through extensive internship opportunities. Our students have access to a diverse range of industry placements, allowing them to apply theoretical knowledge in real-world settings. These internships not only provide valuable practical experience but also foster professional connections that enhance future career prospects. The university collaborates with leading organizations to ensure that students gain exposure to relevant and cutting-edge practices within their chosen fields. This emphasis on practical application equips our graduates with a competitive edge in the job market, as they enter their respective industries with both academic knowledge and hands-on expertise.</p>
            </div>
            <div className="flex flex-col gap-3">
            <p className=" font-normal text-2xl text-logoRed">Job placement</p>
            <p>Our commitment to your success extends beyond education, as we prioritize job placement for our graduates. Through strategic partnerships with industry leaders and a robust career services program, we facilitate internships, networking opportunities, and career development workshops. Our focus is not only on imparting knowledge but also on equipping you with the skills and connections necessary for a seamless transition into the professional world. At the Canadian University of Bangladesh, we are dedicated to ensuring that your academic journey culminates in rewarding employment opportunities aligned with your expertise and aspirations.</p>
            </div>
            <hr />
        </div>
        </div>
    );
};

export default Why;