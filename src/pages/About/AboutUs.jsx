import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import permanentCampus from '../../assets/permanent campus.jpeg'
import TertioryNav from "../../shared/TertioryNav";

const AboutUs = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>
            <div>
        <img
          className="w-full h-96"
          src="https://i.ibb.co/g9cfVbK/polygonal19.jpg"
          alt=""
        />
      </div> 
      <div className=" bg-slate-300">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <p>About</p>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 gap-3">
            <div className="basis-3/5 font-nunito">
                <p className="font-normal text-base"><span className="font-bold text-base text-logoRed">Canadian University of Bangladesh (CUB)</span> has started its journey since June 2016 with the visions and missions of providing excellent education and generating emerging knowledge applicable for the Era of ICT. The assortment challenges of new generation equipped with the materialized global knowledge commanding the attention of the students, and yet be delivered in a method and at a pace that will permit the student to achieve success. In addition to preparing the students to apply their knowledge and skills, the university develops the curriculum with right attitude to attain a specific ability for the profession to deliver. Delivery of the curriculum will engage the students in an active learning process, in which their critical thinking and problem-solving skills will continue to be refined. The educational and career development methodologies are designed to equip the 21st century students with the skills that is required to become accomplished in their respected fields. This will transform the students into highly competent professionals having the potential of becoming future leader in the respective precinct. The university emphasizes on the integration of information, communication and technology-based education while trains its students about human ethics and regulatory laws in their profession as well as the overall society.</p>
            </div>
            <div className="basis-2/5">

            <div tabIndex={0} className="collapse border border-base-300 bg-base-200 rounded-none hover:bg-red-500">
  <div className="collapse-title text-xl font-medium">
    Vision and Mission
  </div>
</div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 rounded-none  hover:bg-red-500">
  <div className="collapse-title text-xl font-medium">
    Leadership and Administration
  </div>
  <div className="collapse-content text-lg font-medium ml-5"> 
    <Link to=''><p>Board Of Trustees</p></Link>
    <Link to=''><p>Syndicate</p></Link>
    <Link to=''><p>Academic Council</p></Link>
    <Link to=''><p>Administration</p></Link>
    <Link to=''><p>Senior Management And Advisors</p></Link>
  </div>
</div>

<div tabIndex={0} className="collapse border border-base-300 bg-base-200 rounded-none hover:bg-red-500">
  <div className="collapse-title text-xl font-medium">
    Permanent Campus
  </div>
</div>

            </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 text-logoRed font-nunito">

<div className='lg:w-max'>
<h1 className="font-normal text-4xl mb-5 font-roboto">Mission</h1>
        <hr className='w-auto h-1  bg-[#F4253F]' />
    </div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
<div>
<ul className="list-disc px-5">
<li className="mb-2">Providing excellent education in an interactive environment, which prepares students for industry, academia and government.</li>
<li className="mb-2">Strengthening the core competence in any program by incorporating industry-oriented and tutorial-based education.</li>
<li className="mb-2">Enhancing Industrial Training program to get acquainted with corporate culture as well as to gather practical skills before graduating.</li>
<li className="mb-2">Arranging regular workshops, seminars, contests etc. to create successful, competent and skillful graduates</li>
</ul>
</div>

    <div>
        <img src={permanentCampus} alt="" />
    </div>
    
</div>

</div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 text-logoRed font-nunito">

        <div className='lg:w-max'>
<h1 className="font-normal text-4xl mb-5 font-roboto">Vision</h1>
        <hr className='w-auto h-1  bg-[#F4253F]' />
    </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div>
  <ul className="list-disc px-5">
    <li className="mb-2">To become one of the leading Universities in the world through creating a strong applied research and teaching environment that responds to the national and international challenges of the 21st century.</li>
    <li className="mb-2">To become recognized universally as one of the top promoters of quality education and emerging applied research.</li>
    <li className="mb-2">To produce competent graduates to work in the highly reputed global companies or pursue higher studies in top ranked universities.</li>
  </ul>
</div>

                <div>
                    <img src={permanentCampus} alt="" />
                </div>
                
            </div>

        </div>
      
      </div>
    );
};

export default AboutUs;