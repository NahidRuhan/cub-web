import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import Faculty from "../../shared/Faculty";
import TertioryNav from "../../shared/TertioryNav";

const English = () => {
    const faculty = [
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/Department%20of%20English/shahbaz.jpg",
            name: "Shahbaz Khan",
            title: "Lecturer",
            department: "Department of English",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/Images/NoProfile.png",
            name: "Adiba Sayeed",
            title: "Adjunct Faculty",
            department: "Department of English",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/Images/NoProfile.png",
            name: "Md. Abdullah Al Mamun",
            title: "Adjunct Faculty",
            department: "Department of English",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/Images/NoProfile.png",
            name: "Musrat Alam",
            title: "Adjunct Lecturer",
            department: "Department of English",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/Images/NoProfile.png",
            name: "Priti Paul",
            title: "Lecturer",
            department: "Department of English",
            university: "Canadian University of Bangladesh"
        },
    ]
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
            <Link to='/academics'><p>Academics</p></Link>
            <p>/</p>
            <Link to='/academics'><p>Departments</p></Link>
            <p>/</p>
            <p>English</p>
        </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5">  
        <div>
            <h1 className="font-normal text-2xl text-red-500 font-roboto pb-3">Goals and Objectives</h1>
            <p className="text-base font-normal font-nunito">The Department of English at the Canadian University of Bangladesh is dedicated to fostering academic excellence in English literature and linguistics. It aims to nurture critical reading and writing skills, and encourage critical thinking. By instilling a profound appreciation for language and culture, our objective is to equip students with the tools to generate knowledge and understanding about the diverse concepts, and contribute to the academic community.</p>
        </div>
        <div>
            <h1 className="font-normal text-2xl text-red-500 font-roboto pb-3">Mission</h1>
            <ul className="list-disc px-5">
<li className="mb-2">To educate students in the fundamental principles of computer science and the cutting-edge skills needed to solve the complex problems of society.</li>
<li className="mb-2">To contribute to the development and progress of computer science, and software and information technology, to provide innovative, creative solutions for societal needs.</li>
<li className="mb-2">To disseminate research through publications, public service and professional activities to impact society in a transformative way.</li>
</ul>
        </div>
        <div>
            <h1 className="font-normal text-2xl text-red-500 font-roboto pb-3">Academic Programs</h1>
            <ul className="list-disc px-5">
<li className="mb-2">Bachelor of Science in Computer Science</li>
<li className="mb-2">Bachelor of Science in Computer Science and Engineering</li>
<li className="mb-2">Master of Science in Computer Science and Engineering</li>
<li className="mb-2">Master of Engineering in Computer Science and Engineering</li>
<li className="mb-2">Master in Computer Applications</li>

</ul>
        </div>
        <div>
            <h1 className="font-normal text-2xl text-red-500 font-roboto pb-3">Achievements:</h1>
            <ul className="list-disc px-5">
<li className="mb-2">The Department of English has successfully established connections with many of the academic scholars of the concerned field. The Department organized a webinar on ‘A comparative analysis between themes and forms of Bengali comics produced in India and Bangladesh’ with Dr. Pritesh Chakraborty, Assistant Professor of English, Acharya Sukumar Sen Mahavidyalaya, West Bengal, who is also a Fulbright Scholar of New York University.</li>
<li className="mb-2">The Department hosted a session on Career development and guidelines for fresh graduates entering the workforce with Dr. Syed Manzoorol Islam, a renowned Bangladeshi critic, writer and former professor of University of Dhaka.
</li>
<li className="mb-2">The Department boasts a vibrant and engaging English club named Carpe Diem. The clubs name, derived from the Latin phrase meaning seize the day, reflects its mission to encourage members to explore literature fearlessly. This dynamic club serves as a platform for literature and cultural enthusiasts. Under the department&apos;s umbrella, Carpe Diem organizes regular literary events, discussions, workshops and creative art performances. The club organized ‘Unleash your proficiency with Duolingo’ which featured esteemed speaker Nafiza Rahman Mou. This event ignited passion for linguistic excellence and motivation to take their language skills to new heights.
</li>

</ul>
        </div>
        </div>

        <Faculty faculty={faculty}></Faculty>


            
        </div>
    );
};

export default English;