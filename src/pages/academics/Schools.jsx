import { Link } from 'react-router-dom';
import LogoNav from '../../shared/LogoNav';
import SecondaryNav from '../../shared/SecondaryNav';
import TertioryNav from '../../shared/TertioryNav';
import { useState } from 'react';
import banner from "../../assets/school.png"
import eee from '../../assets/schools/1.jpg'
import cse from '../../assets/schools/cse.jpg'
import law from '../../assets/schools/law.jpg'
import media from '../../assets/schools/media.jpg';

const Schools = () => {

    const [isHoveredCSE, setIsHoveredCSE] = useState(false);
    const [isHoveredEEE, setIsHoveredEEE] = useState(false);
    const [isHoveredSMS, setIsHoveredSMS] = useState(false);

    const [isHoveredBBA, setIsHoveredBBA] = useState(false);
    const [isHoveredMBA, setIsHoveredMBA] = useState(false);
    const [isHoveredEMBA, setIsHoveredEMBA] = useState(false);

    const [isHoveredEnglish, setIsHoveredEnglish] = useState(false);
    const [isHoveredLaw, setIsHoveredLaw] = useState(false);
    const [isHoveredMCJ, setIsHoveredMCJ] = useState(false);


    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div>
        <img
          className="w-full h-96"
          src={banner}
          alt="demo picture just for show"
        />
      </div> 
      <div className=" bg-slate-300 flex flex-col w-auto h-max">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <p>Academics</p>
            <p>/</p>
            <p>Schools</p>
        </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">

            <div>
                <div className='lg:w-max py-5'>
                        <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">School of Science & Engineering</h1>
                <hr className='w-auto h-1  bg-[#F4253F]' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

    <div onClick={()=>window.location.href = 'https://cse.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredCSE(true)}
    onMouseLeave={() => setIsHoveredCSE(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src={cse}
    alt=""
    style={{ filter: isHoveredCSE ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Computer Science And Engineering (CSE)</h2>
    <p className="font-normal text-lg font-nunito">The Canadian University of Bangladesh&apos;s Computer Science and Engineering Department prioritizes a dynamic curriculum, blending theory and practical applications to keep students abreast of evolving technologies. Our experienced faculty serve as mentors, offering real-world insights. State-of-the-art facilities and labs enable hands-on learning, emphasizing the application of theoretical knowledge. Collaboration is fostered through group projects and competitions, enhancing teamwork and problem-solving skills. We promote interdisciplinary studies, encouraging exploration beyond computer science. Committed to holistic development, our approach extends beyond traditional methods, producing graduates poised to lead in the global tech landscape. Strong industry connections provide internships, ensuring students gain valuable practical experience.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredCSE ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>


    <div onClick={()=>window.location.href = 'https://eee.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredEEE(true)}
    onMouseLeave={() => setIsHoveredEEE(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src={eee}
    alt=""
    style={{ filter: isHoveredEEE ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Electrical And Electronics Engineering (EEE)</h2>
    <p className="font-normal text-lg font-nunito">The Electrical & Electronic Engineering (EEE) Department at the Canadian University of Bangladesh, within the School of Science & Engineering, has earned recognition in academia and industry for its tutorial-based education, well-equipped labs, and experienced faculty. Emphasizing cutting-edge technology, next-gen research, and robust networking, the program specializes students in key areas: Power System, Sustainable Development & Renewable Energy; Computer and Software Engineering, Artificial Intelligence, and Robotics; Advanced Communication, Satellite, Wireless & Smart City, IoT, and Big Data; and Advanced Electronic Device, Materials, and Biomedical streams. The department&apos;s commitment extends beyond quality education, focusing on innovation, research, and real-world applications.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredEEE ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>

    <div onClick={()=>window.location.href = 'https://sms.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredSMS(true)}
    onMouseLeave={() => setIsHoveredSMS(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://sms.cub.edu.bd/img/slider/ds4.jpg"
    alt=""
    style={{ filter: isHoveredSMS ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Shipping And Maritime Science (SMS)</h2>
    <p className="font-normal text-lg font-nunito">The Canadian University of Bangladesh&apos;s Shipping and Maritime Department is committed to providing top-tier education in an interactive environment, preparing students for diverse career paths in industry, academia, and government. We focus on strengthening core competencies through industry-oriented and tutorial-based education, supplementing academic knowledge with practical skills gained from an enriched Industrial Training program. Our efforts extend to organizing workshops, seminars, and contests, fostering problem-solving, leadership, and interpersonal skills. As part of our global aspirations, we aim to be a leading force in applied research and teaching, striving for universal recognition in quality education and applied research. Our ultimate objective is to produce graduates ready for prominent global companies or advanced studies at renowned universities.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredSMS ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>



                
    </div>                
            </div>

            <div>
                <div className='lg:w-max py-5'>
                        <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">School of Business</h1>
                <hr className='w-auto h-1  bg-[#F4253F]' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

    <div onClick={()=>window.location.href = 'https://business.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredBBA(true)}
    onMouseLeave={() => setIsHoveredBBA(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/190518420_10157983380756990_834887716827972937_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=KoZx9EHV3McAX9vog5a&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBq0yoL--fC4RHmKQVgjJZmAPYVOWpsCdFsQJgCZP2vUg&oe=65BDC8A4"
    alt=""
    style={{ filter: isHoveredBBA ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Bachelor Of Business Administration (BBA)</h2>
    <p className="font-normal text-lg font-nunito">The BBA program aims to produce high quality graduates who will be able to place themselves in top ranked positions in local and global companies. This program equips students with the knowledge and skills to prepare them for entry-level management positions and advance to leadership positions in any organization. The program also prepares students to go for higher studies in reputed foreign universities. School of Business combines best practices from academia and industry to impart contemporary business practices to its graduates. The program offers majors in Accounting, Business Intelligence & Data Analytics, Entrepreneurship, Finance, Human Resource Management, Marketing, Digital Marketing & E-Commerce and Operations and Supply Chain Management. The BBA is a 126-credit hour program having a standard duration of 4 years.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredBBA ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>


    <div onClick={()=>window.location.href = 'https://business.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredMBA(true)}
    onMouseLeave={() => setIsHoveredMBA(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/194635250_10157983381026990_8791835497445611278_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=MEUFmTnJYv8AX9BQY_4&_nc_ht=scontent.fdac5-2.fna&oh=00_AfB6NZE-Y_AuCHjpMNK6xD5HXHzYjgJJQAKoo6kN1DitCw&oe=65BDAF5D"
    alt=""
    style={{ filter: isHoveredMBA ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Masters Of Business Administration (MBA)</h2>
    <p className="font-normal text-lg font-nunito">The Master of Business Administration (MBA) program at Canadian University of Bangladesh&apos;s School of Business seeks to provide students with the opportunity to understand and apply modern business and management concepts, values, tools, techniques, and operations. At CUB, you&apos;ll engage in an entirely new personalized lessons that provides you more time to communicate and share expertise with your peers, led by a team of internationally recognized academics and business professionals.
This program is intended for recent graduates who are entering the job marketplace for the primary time, mid-level executives in organizations seeking professional progression, career changers exploring new industries, or entrepreneurs looking to launch their first firm. We provide a distinctive, relevant, and highly fulfilling program of study at Canadian University Business School that will advance your job prospects while providing you with an amazing life experience. Study for your MBA program using the most contemporary across the globe curricula.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredMBA ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>

    <div onClick={()=>window.location.href = 'https://sms.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredEMBA(true)}
    onMouseLeave={() => setIsHoveredEMBA(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/198595056_10157983380621990_2030119732197934893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=seBkXN59-_4AX8wZzUn&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBYd389FlbBO3LzOoFep_taI1G0kXslyNd9qmDzq_mocQ&oe=65BDE0F6"
    alt=""
    style={{ filter: isHoveredEMBA ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Executive Bachelor Of Business Administration (EMBA)</h2>
    <p className="font-normal text-lg font-nunito">The Executive MBA (EMBA) program at Canadian University of Bangladesh Business School seeks to empower business leaders by teaching them how to use theoretical knowledge in actual settings and make sound judgments. This curriculum is created primarily for corporate leaders, public servants, social entrepreneurs, NGO executives, military authorities, and other professions. The two most prominent characteristics of the program are interactive learning and case-based teaching. The Executive MBA (EMBA) will prepare you for a career in leadership and general management. Expand your current job or go beyond your technical specialization. Allow the EMBA to be your spark for fostering into a more senior post, a new function or geographic location, or the establishment of your own business endeavor.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredEMBA ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>         
    </div>                
            </div>

            <div>
                <div className='lg:w-max py-5'>
                        <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">School of Liberal Arts And Social Science</h1>
                <hr className='w-auto h-1  bg-[#F4253F]' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

    <div onClick={()=>window.location.href = 'https://english.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredEnglish(true)}
    onMouseLeave={() => setIsHoveredEnglish(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/141976684_2087047564765367_2353720068227971290_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xIVwUKogxlMAX8jV22s&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBYmNibqV_7DQ5lXmSaXhvZDM4GFbBvBvqpqliF0d7VKw&oe=65BDC320"
    alt=""
    style={{ filter: isHoveredEnglish ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">English</h2>
    <p className="font-normal text-lg font-nunito">The Canadian University of Bangladesh&apos;s Department of English is a dynamic hub for studying Literature, Applied Linguistics, ELT, Cultural Studies, and Critical Literary theories. Dedicated to producing versatile graduates with strong interpretive and communication skills, our mission is to be a global center for academic excellence and professional expertise. We balance general education needs with academic knowledge, utilizing appropriate pedagogies and environments for student success. Our vision is to be a benchmark for liberal arts and sciences education, equipping students with employability skills and providing an intellectually transformative educational journey.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredEnglish ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>


    <div onClick={()=>window.location.href = 'https://law.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredLaw(true)}
    onMouseLeave={() => setIsHoveredLaw(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src={law}
    alt=""
    style={{ filter: isHoveredLaw ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Law</h2>
    <p className="font-normal text-lg font-nunito">Situated in Pragati Sharani, Dhaka, the Department of Law at the Canadian University of Bangladesh (CUB) stands out as one of the nation&apos;s premier law schools. Known for its excellence and educational intimacy, the department boasts nationally acclaimed faculty, small classes, and extensive opportunities for clinical training and public service. With a deliberate focus on producing leaders in various fields, CUB&apos;s Department of Law aims to prepare students for the dynamic legal landscape. Guided by the motto &apos;Inspiring Applied Knowledge&apos; the department imparts both theoretical and practical legal knowledge, fostering talent development and engagement in extra-curricular and pro bono activities.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredMBA ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>

    <div onClick={()=>window.location.href = 'https://mcj.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredMCJ(true)}
    onMouseLeave={() => setIsHoveredMCJ(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src={media}
    alt=""
    style={{ filter: isHoveredMCJ ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Media, Communication and Journalism (MCJ)</h2>
    <p className="font-normal text-lg font-nunito">The Canadian University of Bangladesh&apos;s Department of Media Communication and Journalism is dedicated to excellence in professional development, ethical journalism, innovation, global perspectives, community engagement, and continuous learning. Our commitment to these principles ensures that graduates are well-prepared for success in the dynamic media and journalism industry. Through rigorous training, cutting-edge tools, and real-world experiences, we instill the highest standards of ethical journalism, fostering accuracy, objectivity, and fairness. Embracing innovation and research, we explore emerging trends to develop new ideas and solutions. With a global focus, we prepare students for international engagement, emphasizing the media&apos;s power to bring positive change. Actively engaging with the community, we contribute to societal betterment through projects, partnerships, and initiatives. Promoting a culture of lifelong learning, we encourage adaptability to evolving technologies for competitiveness in the global arena.</p>
    </div>
    <div
    className={`absolute bottom-0 left-0 w-full h-3 bg-black transition-all duration-300 opacity-0 ${
    isHoveredMCJ ? 'opacity-100' : 'opacity-0'
    }`}
    />
    </div>         
    </div>                
            </div>




        </div>


            
        </div>
    );
};

export default Schools;