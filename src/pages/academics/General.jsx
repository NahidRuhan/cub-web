import { Link } from 'react-router-dom';
import banner from '../../assets/general.jpg'
import LogoNav from '../../shared/LogoNav';
import SecondaryNav from '../../shared/SecondaryNav';
import TertioryNav from '../../shared/TertioryNav';
import Faculty from '../../shared/Faculty';

const General = () => {
    const faculty = [
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/GED/Kawser%20Ahmed.jpg",
            name: "Md Kawsar Ahmed Asif",
            title: "Lecturer",
            department: "School of Liberal Arts",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/GED/Md.%20Rashedur%20Rahman.jpg",
            name: "Md Rashedur Rahman",
            title: "Lecturer",
            department: "School of Liberal Arts",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/GED/Muneem%20Shahabuddin.jpg",
            name: "Muneem Shahabuddin",
            title: "Lecturer",
            department: "School of Liberal Arts",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/GED/Naheed%20Zaman.jpg",
            name: "Naheed Zaman",
            title: "Lecturer (Adjunct)",
            department: "School of Liberal Arts",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/GED/Walid%20bin%20kader.jpg",
            name: "Walid Bin kader",
            title: "Assistant professor & Head",
            department: "School of Liberal Arts",
            university: "Canadian University of Bangladesh"
        },
    ]


    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>
            <div>
        <img
          className="w-full h-96 object-cover"
          src={banner}
          alt=""
        />
      </div> 
      <div className=" bg-slate-300 hidden md:flex">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <Link to='/academics'><p className="hover:underline">Academics</p></Link>
            <p>/</p>
            <Link to='/academics'><p className="hover:underline">Departments</p></Link>
            <p>/</p>
            <p>General</p>
        </div>
        </div>
        <div className="flex flex-col pt-5 gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <p>The General Educational Development provides foundational knowledge in academic disciplines, exposing students to diverse learning perspectives and ways of knowing in Social Studies, the Natural Sciences, Languages, Health and Physical Education, the Arts and others. Courses in the General Education Curriculum are required of all students and are (mostly) not dependent on students’ majors. At CUB, we envision our program as every student’s “second major” – an opportunity for students to explore their interests at multiple levels and satisfy and further spark their intellectual curiosity.</p>
            <p>General Educational Development offers excellent general studies courses, supporting the entire undergraduate program of Canadian University of Bangladesh. The General Educational Development emphasizes students basic knowledge in all dimensions, and creates an excellent foundation for their future development. The department wishes that students enjoy the learning process, explore their creativities, and excel in their field of interest.</p>
            <p>Each general education course is interdisciplinary, but each area has its own characteristics; Humanities deals with human nature and representation, Social Sciences deals with social systems, culture and history, and Natural Sciences deals with mathematical ideas and science. By taking these three areas, students will be able to gain an even more interdisciplinary perspective.</p>
            <p>The General Education Program is the University’s commitment to providing breadth and depth to students’ academic, cultural, social, moral, ethical, and physical development during their undergraduate experience. The universitys dedication to fostering students academic, cultural, social, moral, and ethical growth during their undergraduate studies is embodied in the General Education Program. Diversity&apos;s significance is emphasized heavily. Students gain knowledge of how historical, social, cultural, linguistic, artistic, religious, and philosophical backgrounds have influenced society and the ideas and deeds of individuals all over the world. Additionally, they critically evaluate how race, class, and other constructions such as institutions and communities affect how people think, believe, and behave in different cultural and historical contexts. Students also learn how to support a diverse society that values and embraces differences in sexual orientation, gender, color, and other characteristics. They thereby graduate with a solid sense of morality and an ethical viewpoint.</p>
            <ul className="list-disc px-5">
<li className="mb-2">Developed the nation’s first nanosatellite which led Bangladesh into space-age.</li>
<li className="mb-2">Student teams became champions in the “Sustainable Tourism” and “Violence against Women” categories of the 2016 National Hackathon.</li>
<li className="mb-2">Won best paper award in the 19th International Conference on Computer and Information Technology, ICCIT 2016.</li>

</ul>

        </div>

        <div className='flex flex-col gap-5 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl'>
            <h1 className='font-normal text-3xl text-center'>Message From Head</h1>
            <div className='grid grid-cols-2 items-center gap-5'>
                <div>
                    <img src="https://canadianuv.netlify.app/Images/Walid%20bin%20kader.png" alt="" />
                    <div className='text-center'>
                        <p>Walid Bin Kader</p>
                        <p>General Educational Development</p>
                    </div>
                </div>
                <div>
                    <p>Welcome to the Department of General Education at Canadian University of Bangladesh where we are committed to commence your academic journey with the General Education path, providing you with the proper skills to acquire, comprehend, evaluate, and invent. These abilities will help you become a thoughtful and diligent student by preparing you for academic tasks and for the degrees you choose to pursue. Engineering is the branch of science that turned energy and material qualities into helpful features for people. Engineering concepts are transformed into useful machines, structures, and products by technology. The concepts of general educational knowledge like physics, chemistry, and mathematics are used by those in the engineering and technology sectors to address real-world technological issues. The goal of the department is to equip students with the skills necessary to become proficient in math, science, and technology as well as in reading, writing, speaking, and presenting.</p>
                </div>                
            </div>

        </div>
        <Faculty faculty={faculty}></Faculty>
            
        </div>
    );
};

export default General;