import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import Faculty from "../../shared/Faculty";
import TertioryNav from "../../shared/TertioryNav";

const Cse = () => {
    const faculty = [
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Md.%20Hasanuzzaman.png",
            name: "Md Hasanuzzaman",
            title: " ",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Md.%20Ashraful%20Kabir.jpg",
            name: "Md. Ashraful Kabir",
            title: "Lecturer",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Tanjina%20Oriana.jpg",
            name: "Tanjina Oriana",
            title: " ",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Sayor%20Ajfar%20Aaron.jpg",
            name: "Sayor Ajfar Aaron",
            title: "Lecturer",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Sumayra%20Islam.jpg",
            name: "Sumayra Islam",
            title: "Lecturer",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Arif%20Rabbani.jpg",
            name: "Arif Rabbani",
            title: "Adjunct Faculty",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Ashikur%20Rahman.png",
            name: "Ashikur Rahman",
            title: "Adjunct Faculty",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/CSE/Sakib%20Bin%20Asad.jpg",
            name: "Sakib Bin Asad",
            title: "Adjunct Faculty",
            department: "Department of Computer Science and Engineering",
            university: "Canadian University of Bangladesh"
        }
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
            <p>CSE</p>
        </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5">  
        <div>
            <h1 className="font-normal text-2xl text-red-500 font-roboto pb-3">Goals and Objectives</h1>
            <p className="text-base font-normal font-nunito">The Department of Computer Science and Engineering strives to inspire excellence in the creation, application and dissemination of knowledge in computer science and engineering through comprehensive educational programs; research in collaboration with industry, NGOs, and government; diffusion through scholarly publications, and service to the national and international community.</p>
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
<li className="mb-2">Developed the nation’s first nanosatellite which led Bangladesh into space-age.</li>
<li className="mb-2">Student teams became champions in the “Sustainable Tourism” and “Violence against Women” categories of the 2016 National Hackathon.
</li>
<li className="mb-2">Won best paper award in the 19th International Conference on Computer and Information Technology, ICCIT 2016.
</li>

</ul>
        </div>
        </div>

        <Faculty faculty={faculty}></Faculty>


            
        </div>
    );
};

export default Cse;