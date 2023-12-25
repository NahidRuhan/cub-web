import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import Faculty from "../../shared/Faculty";

const Law = () => {

    const faculty = [
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "ABDULLAH AL JAHID", 
          title: "Lecturer",
          department: "Department of in Law",
          university: "Canadian University of Bangladesh"
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "BARRISTER MAHBUBUR RAHMAN",
          title: "Lecturer(Adjunct)",
          department: "Department in Law",
          university: "Canadian University of Bangladesh"
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",
 
          name: "DR MOHAMMAD NAZMUZZAMAN BHUIAN",
          title: "Advisor",
          department: "Department of Law",
          university: "Canadian University of Bangladesh"
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Al Farhad Bin Kashem",
          title: "Former Faculty Member (CUB)", 
          department: "",
          university: ""
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Arifa Chowdhury",
          title: "Former Faculty Member (CUB)",
          department: "",
          university: ""
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Maksuda Sarker Monny", 
          title: "Former Faculty Member (CUB)",
          department: "", 
          university: "" 
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Mr Mir Mashur Ahmed",
          title: "Former Faculty Member (CUB)",
          department: "",
          university: ""
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Ms Meherba Sabrin",
          title: "Former Faculty Member (CUB)",
          department: "",
          university: ""
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Psymhe Wadud",
          title: "Former Faculty Member (CUB)",
          department: "",
          university: ""
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "MD SHIFAT HOSSAIN",
          title: "Officer",
          department: "School of Liberal Arts",
          university: "Canadian University of Bangladesh"
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "MOHAMMAD SUNZAD SHEIKH",
          title: "Assistant Professor & Head",
          department: "Department of Law",
          university: "Canadian University of Bangladesh"
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "NAZIFA MUNIYAT QUADER",
          title: "Lecturer",
          department: "Department of Law",
          university: "Canadian University of Bangladesh"
        },
        {
                      img: "https://canadianuv.netlify.app/Images/NoProfile.png",

          name: "Sabiha Mehzabin Oishee",
          title: "Lecturer", 
          department: "Department of Law",
          university: "Canadian University of Bangladesh"
        }
      ];

    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>
            <div>
        <img
          className="w-full h-96 object-cover"
          src="https://canadianuv.netlify.app/DepartmentThumb/law.jpg"
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
            <p>Law</p>
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
            <div className="text-base font-nunito flex flex-col gap-5">

                <p>Academic Programs</p> <p>Jurisprudence- LAW1101</p> <p>This course is different from other Law courses. It is designed to facilitate students thinking about law in general rather than learning detailed analysis of the legislation and cases consigned to a particular area of law. It includes-</p> <p>Preliminary: Definition, Nature and Scope of Jurisprudence, Subject matter and Utility of Jurisprudence. Schools of Jurisprudence such as Analytical Legal positivism, Historical, Sociological, Philosophical, Legal Pluralism and Comparative Jurisprudence. Custom, Legislation, Precedent Administration of Justice, Independence and Accountability of the Judiciary, Legal Concepts; Rights and Duties, Liability under Civil and Criminal Law, Person natural and Artificial Person, Corporation.</p> <p>Law of Contract- LAW1102</p> <p>The law of contract has confirmed the basic foundations of any contract, regardless of its complexity and substance that it must contain to make the agreement enforceable in law. It is important because it enable lawyers to understand that there is a necessary element which must appear in a contract for a purpose of a contract to be named as a legal contract.</p> <p>Formation of Contract, Revocation of Offer & Acceptance. Consideration, Capacity and the Definition, Nature & Ratification of Minor’s Agreement, Return of Benefit secured by a Fraudulent Minor, Minor’s liability for Necessaries, Unlawful, Void Agreements & Contingent Contract, Unlawful, Void Agreements & Contingent Contract, Discharge, Free Consent</p> <p>Constitutional Law of Bangladesh- LAW 2101</p> <p>This course has been designed to introduce graduate students to constitutional law theories and its effects in realism. The paradigm shift of constitutional law perspectives in different times have been reflected in the lectures, so that the students shall be able to demonstrate the unconstitutionality of actions through state and non-state actors and in international jurisdictions based on constitutionalism.</p> <p>The Historical Development of Constitutional Law, the Fundamentals of Constitutional Law, Fundamental Principles of State Policy and Fundamental Rights, the Executive, the Legislature, the Judiciary, the Election Commission, Others, Amendments</p> <p>Muslim Law – LAW1104</p> <p>Muslim law deals with the relation between shariah law and statutory law on family matters which covers a significant part of civil litigation.</p> <p>Introduction, Marriage, Dissolution of marriage, Gift, Will, Pre-emption, Waqf</p> <p>Hindu Law- LAW1201</p> <p>This course aims to provide students with a basic idea of Hindu personal law applicable in Bangladesh. This course will provide general introduction to the thoughts and principles relating to Hindu law especially in Bangladesh perspectives. The course will address legal issue relating to Hindu family laws, uniform family code and family court system. This course will also provide a comparative perspective of Indian Hindu Law, implementation mechanism, shortcomings, and relevant cases.</p> <p>Law of Labour Relations – LAW1202</p> <p>The Labour law acts as a tool to promote worker empowerments well as worker protection. It regulates individual and collective employment relations. Labour law aims to correct the imbalance of power between the worker and the employer; to prevent the employer from dismissing the worker without good cause; to set up and preserve the processes by which workers are recognized as ‘equal’ partners in negotiations about their working conditions etc. Labour law aims to prevent a race to the bottom by placing restrictions on the contracting partners’ freedom to contract on whatever terms they wish, and setting minimum standards over safety and pay. Labour law also regulates the labour market: a country may choose to put legislation in place setting maximum or minimum limits on wages or working hours, either nationally or in particular sectors or industries.</p> <p>Legal System of Bangladesh- LAW1203</p> <p>This course exclusively deals with the evolution of Judicial System in India, Pakistan and afterwards Bangladesh; it will also enable the students to acquire knowledge about different phases of our legal regime, constitutional history and development and influence of Hindu, Muslim and English legal systems due to different reigns in the Subcontinent.</p> <p>Public International Law- LAW 1204</p> <p>The main objective of the course is to teach on how to protect the interests of the consumers and to establish a stable and strong mechanism for the settlement of consumer disputes. The Act aims to: Protect against the marketing of products that are hazardous to life and property.</p> <p>Constitutional Law of UK & USA- LAW2102</p> <p>A constitution establishes government based on the rule of law and which is limited by law. It thus provides a legal basis for Governmental operations and makes constitutional government possible. It therefore prevents anarch or dictatorial government which knows no legal bounds. A constitution acts like peace treaty.</p> <p>Professional Ethics and Trial Advocacy-LAW4104</p> <p>The course is designed to demonstrate the operation of theoretical and doctrinal law of Professional Ethics and Trial Advocacy. At the end of semester the students will know about client interviewing, marshalling of facts, case planning and strategies. Students will visit the courts to see the real court activities and through mock trial they will demonstrate it. Professional ethics will be taught to understand the humanistic values in relation to law and legal process.</p> <p>Law of Transfer of Property- LAW 2202</p> <p>The chief justification of the Transfer of Property Act is to bring rules, which regulated the transmission of property between living persons into harmony with the rules affecting its devolution & thus to furnish as it were a complement to the work accomplished in framing the Law of testamentary & intestate succession. Another purpose is to complete the Code of the Law contract in so far as it relates to immovable property.</p> <p>Law of Taxation-LAW2203</p> <p>Taxes are the primary source of revenue for most governments. Among other things, this money is spent to improve and maintain public infrastructure, including the roads we travel on, and fund public services, such as schools, emergency services, and welfare programs. Taxation is also important to shape the relationship between the state and the citizens.</p> <p>Company Law and Artha Rin Adalat Ain- LAW 2204</p> <p>The course is designed to help students to know about the general principles of formation, function, and dissolution of a company for taking any legal action if necessary.</p> <p>Land Laws of Bangladesh-LAW3102</p> <p>Land law covers a vast area of legal knowledge governing land management and land administration of Bangladesh. This is a prerequisite course for completion Of the Bachelor of Laws program.</p> <p>Criminology-LAW3101</p> <p>Criminology is a survey course designed to investigate crime and criminals. It is also a course concerned with law and order...that is, why so many people actually obey the law. This course will cover the theories of crime and its causation, historically and currently. However, we will not simply try to pick or favor this or that theory. Our ultimate focus will involve arriving at a synthesis of these theories, where possible, in order to understand the ultimate reference point of any sociological inquiry...that is, the lived-experience of human beings in relation to one another. It is this experience, not just the ideas about it that will be our primary concern. Thus, we will need to try to avoid defensive stances about personally-favored perspectives.</p> <p>Environmental Laws of Bangladesh-LAW3201</p> <p>This course provides basic concept of environment, Environmental Law as well as different principles regarding environment. The subject has great importance for the environment around the world. Through this the students will be able to know about International Conventions, Protocol, Arrangements and they will be aware of Environment, Bio-diversity and Ecosystem. The course concludes with several case-studies related to environmental issues both national and international area.</p> <p>Law of Evidence- LAW3202</p> <p>This course will enlighten students with one of the most important adjective fields of law i.e. Law of Evidence. The law of evidence provides the parameters for determining facts within the adjudicative process, and thus how the adjudicative process defines truth. The objectives of this course are to: Introduce the substantive law of evidence and consider how the law of evidence is applied in practice; Identify principles of fairness and conceptualizations of justice underlying the law of evidence; and Explore issues of professional responsibility related to preserving and using evidence.</p> <p>Law of Crimes-Law3203</p>

            </div>

        </div>
        <div>
            <h1 className="font-normal text-2xl text-red-500 font-roboto pb-3">Achievements in International and National Moot Court Competitions</h1>
            <ul className="list-disc px-5">
<li className="mb-2">The undergraduates of CUB Department of Law are exceedingly trained in Mooting and Research. They are trained by national and global facilitators every year. They are trained in two sectors, the sectors being, oral skills and research skills. The students only get the opportunity to enter for the main competition after a rigorous selection by the Mooting instructor and the Faculty Advisor.</li>
<li className="mb-2">The students of CUB Department of Law has participated in various prestigious moot court competitions. They have participated in the Philip C. Jessup International Law Moot Court Competition for consecutive years. The Philip C. Jessup International Law Moot Court Competition, also known as the Jessup Moot or The Jessup, is the oldest and largest international moot competition in the world, attracting participants from almost 700 law schools in more than 90 countries in recent years. The competition has been described as the most prestigious moot court competition in the world by a large number of organizations and universities internationally, and is one of the grand slam or major moots. They students have secured a good position in the competition and their memorial was in the list of top 10 memorials in the competition.</li>
<li className="mb-2">The students have also participated and secured the position of 2nd Runner up in the prestigious 2nd Professor Shah Alam Constitutional Law Moot Court Competition. The 2nd Professor Shah Alam Constitutional Law Moot Court Competition was organized by Empowerment through Law of the Common People (ELCOP) and was held from 24-27 June. A total of 26 teams representing different universities of Bangladesh had participated in this moot court competition.</li>
<li className="mb-2">Apart from this, the students also participated and secured a virtuous stance in significant moot court competitions like, the Henry Dunant Memorial Moot Court Competition and DUMCS-TIB Anti-Corruption Moot Competition.</li>
<li className="mb-2">Achievements of Our Dynamic Alumnus: Alumni are great role models for current students and are often well placed to offer practical support to students as they start their careers. Alumni are often in the position to engage the expertise of the institution in their professional lives. Our alumnus are our international ambassadors. The Alumnus of CUB Department of Law are working and studying in prestigious institutes around the world. They are guided and supported by the faculty members of the department even after their graduation.</li>
<li className="mb-2">CUB Department of Law Research Cell: The research cell of CUB Department of Law, helps facilitating research opportunities to both faculty members and undergraduate students. Through the research cell the faculty members and students get opportunity to work for different institutes in their research fields. Additionally, the research cell is also establishing their own Legal Journal, which is to be released momentarily.</li>

</ul>

        </div>
        </div>

        <Faculty faculty={faculty}></Faculty>
            
        </div>
    );
};

export default Law;