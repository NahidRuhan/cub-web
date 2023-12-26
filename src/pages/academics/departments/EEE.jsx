import { Link } from "react-router-dom";
import LogoNav from "../../../shared/LogoNav";
import SecondaryNav from "../../../shared/SecondaryNav";
import TertioryNav from "../../../shared/TertioryNav";
import Faculty from "../../../shared/Faculty";

const EEE = () => {
    const faculty = [
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/EEE/Arnab%20Saha.jpg",
            name: "Arnab Saha",
            title: "Lecturer",
            department: "Department of Electrical and Electronic Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/EEE/Dr.%20Mohammad%20Faisal.jpg",
            name: "Dr Mohammad Faisal",
            title: "Professor & Head",
            department: "Department of Electrical and Electronic Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/EEE/Farhan%20Fuad.jpg",
            name: "Farhan Fuad",
            title: "Lecturer",
            department: "Department of Electrical and Electronic Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/EEE/Md.%20Sakhawat%20Hossain.jpg",
            name: "Md Sakhawat Hossain",
            title: "Lecturer",
            department: "Department of Electrical and Electronic Engineering",
            university: "Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/EEE/Sheikh%20Mohd%20Ta-Seen%20Afrid.jpg",
            name: "Sheikh Mohd Ta-Seen Afrid",
            title: "Lecturer",
            department: "Department of Electrical and Electronic Engineering",
            university: "Advisor, Club Electro, Canadian University of Bangladesh"
        },
        {
            img: "https://canadianuv.netlify.app/AllImage/Faculties/EEE/Umme%20Afruz.png",
            name: "UmmeAfruz",
            title: "Lecturer",
            department: "Department of Electrical and Electronic Engineering",
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
          src="https://canadianuv.netlify.app/DepartmentThumb/CSE.jpg"
          alt=""
        />
      </div> 
      <div className="bg-slate-300 hidden md:flex">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <Link to='/academics'><p className="hover:underline">Academics</p></Link>
            <p>/</p>
            <Link to='/academics'><p className="hover:underline">Departments</p></Link>
            <p>/</p>
            <p>EEE</p>
        </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-xl">Program objectives</h1>
                    <p className="font-normal text-base">The program in Electrical and Electronic Engineering at the Canadian University of Bangladesh is designed to provide students with a thorough understanding of general education and the fundamental principles of electrical and electronic engineering, ultimately leading to the attainment of a Bachelor of Science in Electrical and Electronic Engineering. The primary objective of the program is to enhance the ongoing professional growth of individuals who have completed their education, specifically within their respective fields. This is achieved by providing them with the necessary skills and knowledge to excel in their chosen career pathways, while also promoting preparedness for sustainable development and maintaining a strong commitment to human values.</p>
                    <p className="font-normal text-base">The Program Educational Objectives (PEOs) refer to the desired outcomes of a program that are intended to be achieved by its graduates.</p>
                    <p className="font-normal text-base">Proficiency: Graduates will demonstrate exceptional competence in their respective professional endeavors via the efficient application of their knowledge and abilities in many domains of electrical and electronic engineering.</p>
                    <p className="font-normal text-base">Self-development: This objective includes the ability to effectively navigate and thrive in difficult circumstances, as well as the commitment to continuously enhance one’s professional skills and knowledge by lifetime learning, pursuing further education, and engaging in continuing professional training.</p>
                    <p className="font-normal text-base">Values: Graduates will exhibit a profound dedication to societal values and obligations, actively participating in the advancement of sustainable resolutions for pertinent engineering challenges.</p>
                    <p className="font-normal text-base">Leadership: Graduates will demonstrate leadership responsibilities within their respective domains and beyond while upholding ethical and professional standards in a suitable manner.</p>
                    <p className="font-normal text-base">The primary aim of the Bachelor of Science in Electrical and Electronic Engineering program is to provide graduates with the necessary skills and knowledge to excel in their professional endeavors, make meaningful contributions to sustainable development, and adhere to the utmost principles of professionalism and ethics.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-xl">Program outcome </h1>
                    <p className="font-normal text-base">1. Commitment to Excellence: Our core function is to provide excellent education in an interactive environment that aligns with the university&apos;s vision and mission. We are dedicated to preparing students for success in industry, academia, and government by upholding the highest standards of teaching and research.</p>
                    <p className="font-normal text-base">2. Industry Integration: We actively seek to bridge the gap between academia and industry. Our goal is to strengthen program competence by incorporating industry-oriented and tutorial-based education. This principle ensures our graduates are well-prepared to meet the challenges of the 21st century.</p>
                    <p className="font-normal text-base">3. Practical Skill Development: We value hands-on experience. Through our enhanced industrial training program, we introduce students to corporate culture and equip them with practical skills before graduation. This prepares them to contribute effectively to the workforce upon completion of their studies.</p>
                    <p className="font-normal text-base">4. Research and Innovation: We actively engage students in cutting-edge research by providing access to various laboratories and international bodies. We inspire students to create innovative projects, nurture entrepreneurship, and develop the capability to showcase their ideas, fostering a culture of innovation and leadership as well as to encourage the publication of research articles in international journals and conferences.</p>
                    <p className="font-normal text-base">5. Continuous Learning: We promote a culture of lifelong learning by organizing regular workshops, seminars, contests, and other learning activities. This principle nurtures competent and skillful graduates who are ready to tackle real-world problems.</p>
                    <p className="font-normal text-base">5. Continuous Learning: We promote a culture of lifelong learning by organizing regular workshops, seminars, contests, and other learning activities. This principle nurtures competent and skillful graduates who are ready to tackle real-world problems.</p>
                    <p className="font-normal text-base">7. Ethical Values: Honesty, integrity, and respect are at the core of our department&apos;s values. We instill these principles in our students, preparing them to become responsible and ethical professionals.</p>
                    <p className="font-normal text-base">8. Diversity and Inclusivity: We embrace diversity and inclusivity, respecting the unique backgrounds and perspectives of our students and faculty. Our department is committed to creating a welcoming and respectful environment where everyone can thrive.</p>
                    <p className="font-normal text-base">9. Cultivating Awareness: We actively encourage students to consider cultural, social and environmental factors in their innovative research and projects that grow a sense of responsibility and sustainability in their endeavors.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-xl">Course Overview</h1>
                    <p className="text-xl font-medium">Solid State Electronics Stream (SSE):</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Introduction to VLSI Design (EEE 411):</span> A VLSI Design course prepares individuals to design the intricate integrated circuits powering modern electronics. Graduates contribute to the development of smartphones, IoT devices, and other consumer electronics, shaping practical aspects of daily life. Their expertise is crucial in industries like automotive and healthcare, influencing advancements in technology. VLSI Design directly translates theoretical knowledge into practical applications, driving innovation in electronic systems.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Semiconductor Devices & Technology (EEE 313):</span> A Semiconductor Devices & Technology course provides insights into the design and fabrication of electronic components. Graduates play a vital role in the semiconductor industry, contributing to the development of advanced computer chips and electronic devices. This knowledge influences the efficiency and performance of everyday technologies, from smartphones to medical equipment. The course bridges theory with practical applications, empowering individuals to shape the landscape of modern electronics.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Analog Electronics I (EEE 241):</span> Analog Electronics I is instrumental in shaping the foundation of electrical engineering, offering skills applicable to real-world scenarios. Students learn about amplifiers, filters, and signal processing, translating theory into practical applications. This course is particularly relevant for professionals working on analog and mixed-signal integrated circuits, impacting the design and performance of electronic systems. Overall, Analog Electronics I enhances problem-solving abilities, critical for addressing challenges in practical scenarios across various industries.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Power Electronics (EEE 312):</span> In the realm of renewable energy, Power Electronics professionals contribute to the design of efficient solar inverters and wind turbine controllers. In electric transportation, the course finds practical application in the development of electric vehicle power systems and charging infrastructure. Industries benefit from the expertise in optimizing power efficiency, reducing energy consumption, and enhancing the reliability of electronic systems. Overall, Power Electronics serves as a critical link between electrical engineering theory and the tangible advancements that drive progress in contemporary technology and infrastructure.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Telecommunications Engineering Stream (TCE):</span> </p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Telecommunications Engineering (EEE 321):</span> Telecommunication Engineering professionals contribute to the practicality of everyday life by advancing voice and video communication technologies. They optimize the performance of telecommunication networks, ensuring seamless connectivity for global and local communication. Graduates are instrumental in developing new communication standards, enhancing the efficiency of data transmission, and addressing challenges in network security. In essence, the course empowers individuals to play a crucial role in shaping the evolving landscape of modern communication, making information more accessible and communication more efficient for individuals and businesses alike.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Opto-Electronic Engineering (EEE 425):</span> An Opto-Electronic Engineering course focuses on the study of devices that involve the interaction of light and electronic signals. Graduates contribute to practical life by designing technologies such as lasers, fiber optics, and sensors used in communication, medical imaging, and consumer electronics. The course&apos;s applications extend to industries like healthcare, where opto-electronic devices enhance diagnostics and treatments. Ultimately, Opto-Electronic Engineering equips individuals to innovate in technologies that leverage the unique properties of light for diverse real-world applications.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Satellite Communication System (EEE 427):</span> A Satellite Communication System course bridges theoretical knowledge with practical applications, preparing individuals to design and manage satellite-based communication networks. Graduates contribute practically by ensuring reliable global connectivity in telecommunications, broadcasting, and emergency response systems. The course&apos;s impact extends to everyday life through applications like GPS navigation, weather forecasting, and remote sensing for environmental monitoring. In essence, it equips professionals to play a key role in enhancing communication, safety, and information access on a global scale.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Fiber Optic Communication System (EEE 426):</span> A Fiber Optic Communication System course focuses on the principles of transmitting data through optical fibers. Graduates contribute practically by designing and implementing high-speed and reliable communication networks. The course&apos;s impact is evident in everyday life, from the internet connectivity in homes and offices to the backbone of telecommunications networks. Ultimately, professionals in the Fiber Optic Communication System enhance practical aspects of modern living by ensuring efficient data transmission and communication.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Power System Engineering Stream (PSE):</span></p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Switchgear and Protection (EEE 462):</span> Switchgear and Protection professionals, equipped with skills from the course, contribute practically to reducing electrical downtime and enhancing grid resilience. They play a pivotal role in implementing smart grid technologies, optimizing power distribution for increased efficiency and sustainability. The course&apos;s impact extends to industries such as manufacturing, where professionals ensure the protection of equipment and personnel. Overall, graduates in Switchgear and Protection actively contribute to the reliability, safety, and modernization of electrical infrastructure, making a tangible difference in practical applications across diverse sectors.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Electrical Transmission and Distribution System (EEE 362):</span> An Electrical Transmission and Distribution System course focuses on the principles of efficiently transporting and delivering electrical power. Graduates contribute practically by designing, maintaining, and upgrading power grids, ensuring a stable electricity supply to homes and industries. The course&apos;s impact is evident in everyday life, playing a crucial role in reliable energy access, infrastructure development, and economic growth. Ultimately, professionals in this field enhance the practical aspects of modern living by ensuring a secure and efficient electrical transmission and distribution system.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">High Voltage Engineering (EEE 465):</span> A High Voltage Engineering course is essential for professionals working in the design and maintenance of electrical systems operating at high voltages. Graduates contribute practically by ensuring the reliability and safety of high-voltage infrastructure, impacting power transmission, industrial operations, and research applications. The course&apos;s applications extend to various sectors, including power generation and distribution, where specialists play a critical role in managing and mitigating high-voltage challenges. Ultimately, High Voltage Engineering professionals enhance the practical aspects of modern life by ensuring the secure and efficient operation of high-voltage systems, critical for powering our industries and homes.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Computer & Software Engineering Stream (CSE):</span></p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Computer Architecture and Organization (EEE 336):</span> In addition to hardware design, professionals with expertise in Computer Architecture and Organization are integral to optimizing software performance. They contribute practically to developing efficient algorithms, improving memory management, and enhancing overall system functionality. The course&apos;s impact is evident in diverse applications, from gaming consoles and smart devices to large-scale data centers powering online services. Graduates in this field actively influence the user experience, system responsiveness, and the seamless integration of technology into various aspects of daily life. Ultimately, Computer Architecture and Organization education is fundamental for professionals driving innovation and efficiency in the ever-evolving landscape of computing applications.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Artificial Intelligence (EEE 333):</span> Artificial Intelligence professionals, educated through AI courses, are at the forefront of developing innovative solutions for addressing global challenges. They contribute to electrical and electronic engineering by utilizing AI for industry automation, health services, and robotics. In education, AI applications enhance personalized learning experiences, adapting to individual student needs. The course’s impact is pervasive, influencing multiple sectors and directly enhancing the quality of life through advancements in technology and problem-solving.</p>
                    <p className="font-normal text-base"><span className="text-xl font-medium">Database Management Systems (EEE 337):</span> A Database Management Systems (DBMS) course is crucial for understanding the design and maintenance of organized data systems. Graduates contribute practically by developing and managing databases that underpin various applications, from online transactions to customer relationship management. The course&apos;s impact extends to industries like finance, healthcare, and e-commerce, where efficient data management enhances decision-making processes. Ultimately, professionals in this field shape the practical aspects of modern living by ensuring secure, reliable, and accessible storage and retrieval of information.</p>
                </div>            
        </div>
        <Faculty faculty={faculty}></Faculty>

        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default EEE;