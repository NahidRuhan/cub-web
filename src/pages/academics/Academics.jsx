import { Link, useNavigate } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import { useState } from 'react';
import TertioryNav from "../../shared/TertioryNav";


const Academics = () => {
  const [isHoveredCSE, setIsHoveredCSE] = useState(false);
  const [isHoveredEnglish, setIsHoveredEnglish] = useState(false);
  const [isHoveredLaw, setIsHoveredLaw] = useState(false);
  const [isHoveredEEE, setIsHoveredEEE] = useState(false);
  const [isHoveredGeneral, setIsHoveredGeneral] = useState(false);
  const navigate = useNavigate();


    return (
        <div>
            <LogoNav></LogoNav>
            <SecondaryNav></SecondaryNav>
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
            <p>Academics</p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">


        <div onClick={()=>navigate('/academics/departments/cse')}
      className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHoveredCSE(true)}
      onMouseLeave={() => setIsHoveredCSE(false)}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-full h-72"
          src="https://canadianuv.netlify.app/DepartmentThumb/CSE.jpg"
          alt=""
          style={{ filter: isHoveredCSE ? 'brightness(70%)' : 'brightness(100%)' }}
        />
        <h2 className="font-bold text-2xl font-roboto text-logoRed">Department Of Computer Science And Engineering</h2>
        <p className="font-normal text-lg font-nunito">The Department of Computer Science and Engineering strives to inspire excellence in the creation, application and dissemination of knowledge in computer science and engineering through comprehensive educational programs; research in collaboration with industry, NGOs, and government; diffusion through scholarly publications, and service to the national and international community.</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
          isHoveredCSE ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>


        <div onClick={()=>navigate('/academics/departments/english')}
      className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHoveredEnglish(true)}
      onMouseLeave={() => setIsHoveredEnglish(false)}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-full h-72"
          src="https://canadianuv.netlify.app/DepartmentThumb/English.jpg"
          alt=""
          style={{ filter: isHoveredEnglish ? 'brightness(70%)' : 'brightness(100%)' }}
        />
        <h2 className="font-bold text-2xl font-roboto text-logoRed">Department Of English</h2>
        <p className="font-normal text-lg font-nunito">The Department of English at the Canadian University of Bangladesh is dedicated to fostering academic excellence in English literature and linguistics. It aims to nurture critical reading and writing skills, and encourage critical thinking. By instilling a profound appreciation for language and culture, our objective is to equip students with the tools to generate knowledge and understanding about the diverse concepts, and contribute to the academic community.</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
          isHoveredEnglish ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>


    <div onClick={()=>navigate('/academics/departments/law')}
      className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHoveredLaw(true)}
      onMouseLeave={() => setIsHoveredLaw(false)}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-full h-72"
          src="https://canadianuv.netlify.app/DepartmentThumb/law.jpg"
          alt=""
          style={{ filter: isHoveredLaw ? 'brightness(70%)' : 'brightness(100%)' }}
        />
        <h2 className="font-bold text-2xl font-roboto text-logoRed">Department Of LAW</h2>
        <p className="font-normal text-lg font-nunito">The Department of LAW at the Canadian University of Bangladesh is dedicated to fostering academic excellence in English literature and linguistics. It aims to nurture critical reading and writing skills, and encourage critical thinking. By instilling a profound appreciation for language and culture, our objective is to equip students with the tools to generate knowledge and understanding about the diverse concepts, and contribute to the academic community.</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
          isHoveredLaw ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>


    <div onClick={()=>navigate('/academics/departments/cse')}
      className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHoveredEEE(true)}
      onMouseLeave={() => setIsHoveredEEE(false)}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-full h-72"
          src="https://canadianuv.netlify.app/DepartmentThumb/EEE.jpg"
          alt=""
          style={{ filter: isHoveredEEE ? 'brightness(70%)' : 'brightness(100%)' }}
        />
        <h2 className="font-bold text-2xl font-roboto text-logoRed">Department Of EEE</h2>
        <p className="font-normal text-lg font-nunito">The program in Electrical and Electronic Engineering at the Canadian University of Bangladesh is designed to provide students with a thorough understanding of general education and the fundamental principles of electrical and electronic engineering, ultimately leading to the attainment of a Bachelor of Science in Electrical and Electronic Engineering. The primary objective of the program is to enhance the ongoing professional growth of individuals who have completed their education, specifically within their respective fields. This is achieved by providing them with the necessary skills and knowledge to excel in their chosen career pathways, while also promoting preparedness for sustainable development and maintaining a strong commitment to human values.</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
          isHoveredEEE ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>

    <div onClick={()=>navigate('/academics/departments/cse')}
      className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHoveredGeneral(true)}
      onMouseLeave={() => setIsHoveredGeneral(false)}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-full h-72"
          src="https://canadianuv.netlify.app/DepartmentThumb/English.jpg"
          alt=""
          style={{ filter: isHoveredGeneral ? 'brightness(70%)' : 'brightness(100%)' }}
        />
        <h2 className="font-bold text-2xl font-roboto text-logoRed">General Education Department</h2>
        <p className="font-normal text-lg font-nunito">The General Educational Development provides foundational knowledge in academic disciplines, exposing students to diverse learning perspectives and ways of knowing in Social Studies, the Natural Sciences, Languages, Health and Physical Education, the Arts and others. Courses in the General Education Curriculum are required of all students and are (mostly) not dependent on students&apos; majors. At CUB, we envision our program as every student&apos; “second major”  an opportunity for students to explore their interests at multiple levels and satisfy and further spark their intellectual curiosity.</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
          isHoveredGeneral ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>


                    
        </div>


            
        </div>
    );
};

export default Academics;