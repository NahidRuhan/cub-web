import { Link } from 'react-router-dom';
import LogoNav from '../../shared/LogoNav';
import SecondaryNav from '../../shared/SecondaryNav';
import TertioryNav from '../../shared/TertioryNav';
import { useState } from 'react';
import demo from "../../assets/demo.jpg"

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
          className="w-full h-96 object-cover"
          src={demo}
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores obcaecati nostrum, adipisci est molestias assumenda facilis voluptatem fuga ut quas id quod consequuntur, atque exercitationem dolore ratione, autem fugiat.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

    <div onClick={()=>window.location.href = 'https://cse.cub.edu.bd/'}
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
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Computer Science And Engineering (CSE)</h2>
    <p className="font-normal text-lg font-nunito">The Department of Computer Science and Engineering strives to inspire excellence in the creation, application and dissemination of knowledge in computer science and engineering through comprehensive educational programs; research in collaboration with industry, NGOs, and government; diffusion through scholarly publications, and service to the national and international community.</p>
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
    src="https://canadianuv.netlify.app/DepartmentThumb/EEE.jpg"
    alt=""
    style={{ filter: isHoveredEEE ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Electrical And Electronics Engineering (EEE)</h2>
    <p className="font-normal text-lg font-nunito">The program in Electrical and Electronic Engineering at the Canadian University of Bangladesh is designed to provide students with a thorough understanding of general education and the fundamental principles of electrical and electronic engineering, ultimately leading to the attainment of a Bachelor of Science in Electrical and Electronic Engineering. The primary objective of the program is to enhance the ongoing professional growth of individuals who have completed their education, specifically within their respective fields.</p>
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
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredSMS ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Shipping And Maritime Science (SMS)</h2>
    <p className="font-normal text-lg font-nunito">The Department of Shipping and Maritime Science is committed to fostering excellence in the field of maritime studies by offering comprehensive educational programs and conducting pioneering research. With a focus on the multifaceted aspects of shipping, logistics, and maritime affairs, our department collaborates closely with industry leaders, non-governmental organizations (NGOs), and governmental bodies to advance knowledge and innovation.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores obcaecati nostrum, adipisci est molestias assumenda facilis voluptatem fuga ut quas id quod consequuntur, atque exercitationem dolore ratione, autem fugiat.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

    <div onClick={()=>window.location.href = 'https://business.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredBBA(true)}
    onMouseLeave={() => setIsHoveredBBA(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredBBA ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Bachelor Of Business Administration (BBA)</h2>
    <p className="font-normal text-lg font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laborum vel. Ducimus alias autem laudantium assumenda odit deleniti dolorum repellendus et nobis dolores itaque illum velit quidem recusandae ratione, aspernatur consectetur deserunt voluptatibus voluptatem eveniet corrupti molestias maiores quos? Obcaecati, enim! Quod, hic! Omnis sapiente ullam commodi blanditiis dolorum?</p>
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
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredMBA ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Masters Of Business Administration (MBA)</h2>
    <p className="font-normal text-lg font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laborum vel. Ducimus alias autem laudantium assumenda odit deleniti dolorum repellendus et nobis dolores itaque illum velit quidem recusandae ratione, aspernatur consectetur deserunt voluptatibus voluptatem eveniet corrupti molestias maiores quos? Obcaecati, enim! Quod, hic! Omnis sapiente ullam commodi blanditiis dolorum?</p>
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
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredEMBA ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Executive Bachelor Of Business Administration (EMBA)</h2>
    <p className="font-normal text-lg font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laborum vel. Ducimus alias autem laudantium assumenda odit deleniti dolorum repellendus et nobis dolores itaque illum velit quidem recusandae ratione, aspernatur consectetur deserunt voluptatibus voluptatem eveniet corrupti molestias maiores quos? Obcaecati, enim! Quod, hic! Omnis sapiente ullam commodi blanditiis dolorum?</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores obcaecati nostrum, adipisci est molestias assumenda facilis voluptatem fuga ut quas id quod consequuntur, atque exercitationem dolore ratione, autem fugiat.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

    <div onClick={()=>window.location.href = 'https://english.cub.edu.bd/'}
    className="p-5 bg-slate-100 shadow-xl cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setIsHoveredEnglish(true)}
    onMouseLeave={() => setIsHoveredEnglish(false)}
    >
    <div className="flex flex-col gap-2">
    <img
    className="w-full h-72"
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredEnglish ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">English</h2>
    <p className="font-normal text-lg font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laborum vel. Ducimus alias autem laudantium assumenda odit deleniti dolorum repellendus et nobis dolores itaque illum velit quidem recusandae ratione, aspernatur consectetur deserunt voluptatibus voluptatem eveniet corrupti molestias maiores quos? Obcaecati, enim! Quod, hic! Omnis sapiente ullam commodi blanditiis dolorum?</p>
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
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredLaw ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Law</h2>
    <p className="font-normal text-lg font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laborum vel. Ducimus alias autem laudantium assumenda odit deleniti dolorum repellendus et nobis dolores itaque illum velit quidem recusandae ratione, aspernatur consectetur deserunt voluptatibus voluptatem eveniet corrupti molestias maiores quos? Obcaecati, enim! Quod, hic! Omnis sapiente ullam commodi blanditiis dolorum?</p>
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
    src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    style={{ filter: isHoveredMCJ ? 'brightness(70%)' : 'brightness(100%)' }}
    />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Media, Communication and Journalism (MCJ)</h2>
    <p className="font-normal text-lg font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laborum vel. Ducimus alias autem laudantium assumenda odit deleniti dolorum repellendus et nobis dolores itaque illum velit quidem recusandae ratione, aspernatur consectetur deserunt voluptatibus voluptatem eveniet corrupti molestias maiores quos? Obcaecati, enim! Quod, hic! Omnis sapiente ullam commodi blanditiis dolorum?</p>
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