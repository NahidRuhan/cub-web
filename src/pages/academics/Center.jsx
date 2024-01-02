import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import banner from "../../assets/centers and institutions.jpg"

const Center = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>

            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <img
          className="w-full h-96"
          src={banner}
          alt=""
        />  


            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
            <div className="flex flex-col">
                <h1 className="font-normal text-2xl text-[#f4253f] py-5">Center for International Language and Culture</h1>
                <div className="flex flex-col gap-3">
                    <p>Welcome to the Canadian University of Bangladesh&apos;s Center for International Language and Culture, where diversity meets academic excellence. Our center is a vibrant hub that fosters linguistic proficiency and celebrates the rich tapestry of global cultures.</p>
                    <p>At CUB, we offer a spectrum of language programs designed to empower students with the skills needed to navigate an interconnected world. Whether you&apos;re exploring English for academic purposes, enhancing your proficiency in Korean or delving into the intricacies of other international languages, our dedicated faculty is committed to providing an immersive and enriching learning experience.</p>
                    <p>Embrace a multicultural environment that promotes cross-cultural understanding, communication, and collaboration. Join us on a journey of language exploration and cultural exchange, where every word spoken opens a door to new connections and opportunities.</p>
                    <p>Discover the world through language at the Canadian University of Bangladesh&apos;s Center for International Language and Culture. Your pathway to global communication and cultural fluency begins here.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="font-normal text-2xl text-[#f4253f] py-5">Ethical Hacking and Forensic Analysis Center</h1>
                <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#f4253f] text-base">Objective:</h2>
                    <p>The Ethical Hacking and Forensic Analysis Center (EHFAC) aims to be a pioneering force in cybersecurity by fostering a secure digital environment through ethical hacking practices and advanced forensic analysis. Our mission is to collaborate with industries and governmental bodies to address cybersecurity threats, develop proactive defense mechanisms, and train a cadre of cybersecurity professionals equipped to safeguard critical data and infrastructure, both nationally and internationally.</p>                        
                    </div>
                    <div className="flex flex-col gap-3">
                    <h2 className="text-[#f4253f] text-base">Description:</h2>
                    <p>At the Ethical Hacking and Forensic Analysis Center, our team of experts is dedicated to staying at the forefront of cybersecurity challenges. We specialize in employing ethical hacking methodologies to identify vulnerabilities in systems, networks, and applications, thereby fortifying defenses against malicious cyber threats. Furthermore, our focus extends to forensic analysis, where we leverage cutting-edge technologies to investigate cyber incidents, gather digital evidence, and provide insights crucial for legal proceedings.</p>
                    <p>Our research initiatives encompass a wide spectrum, including the exploration of novel hacking techniques, the development of robust cybersecurity frameworks, and the creation of tools for digital forensics. EHFAC&apos;s efforts also extend to raising awareness about cybersecurity best practices among various stakeholders, from enterprises to governmental agencies and educational institutions.</p>
                    <p>As the digital landscape evolves, cybersecurity remains pivotal across all sectors. EHFAC envisions playing a pivotal role in not only mitigating cyber risks but also in shaping global cybersecurity standards, thereby ensuring a safer digital future for individuals and organizations alike.</p>                        
                    </div>
                </div>
            </div>
            </div>



        </div>
    );
};

export default Center;