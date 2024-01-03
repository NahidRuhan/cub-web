import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
const Contact = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="bg-logoRed text-white">
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 h-60 items-center">

                <h1 className="text-3xl md:text-4xl lg:text-6xl py-3">Contact</h1>
                <div className="flex gap-3">
                <Link to='/'><p className="hover:underline">Home</p></Link>
                <p>/</p>
                <p>Contact</p>                    
                </div>

            </div>                
            </div>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-red-700 text-3xl">City Campus</h1>
                        <p>Rangs RL Square Pragati Sharani (Bir uttam Rafiqul Islam Avenue), Dhaka-1212, Bangladesh.</p>
                        <p><span className="font-bold">Admission Office:</span> +88017 07070280-84, +880222 6602580 (Ext:- 1008), admissions@cub.edu.bd</p>
                        <p><span className="font-bold">Student Support Wing (for existing students):</span> +88017 08136910, ssw@cub.edu.bd</p>
                        <p><span className="font-bold">Cash Collection Booth:</span> +88017 08136919</p>
                        <p><span className="font-bold">General Information:</span> +8802 55055281 (Ext:- 1011), info@cub.edu.bd</p>                    
                    </div>
                    <div className="w-full">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.232343518413!2d90.42286807411539!3d23.774739278653758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1f33e7d81%3A0xa7d45a97b942ae04!2sCanadian%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1703667110675!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>                    
                </div>
                <div>
                    <img src="https://i.ibb.co/GcCXNMb/2022-07-13.jpg" alt="" />
                    <p className="text-center">City Campus</p>
                </div>
                </div>



                <h1 className="text-red-700 text-3xl">Permanent Campus</h1>

                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="flex flex-col gap-3">
                    <div>
                    <p>Plot - 60, Road - 107 & 404, Sector - 9,</p>
                    <p>Purbachal New Town, Bangladesh.</p>
                </div>
                <p>Admission Office: +88017 07070280-84, +880222 6602580 (Ext:- 1008), admissions@cub.edu.bd</p>
                <p><span className="font-bold">Student Support Wing (for existing students):</span> +88017 08136910, ssw@cub.edu.bd</p>
                <p><span className="font-bold">Cash Collection Booth:</span> +88017 08136919</p>
                <p><span className="font-bold">General Information:</span> +8802 55055281 (Ext:- 1011), info@cub.edu.bd</p>

                <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116799.12936360393!2d90.385099920393!3d23.81956650742574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cfe70f77fe7f%3A0xd5307446f734e911!2sCanadian%20University%20of%20Bangladesh%20(Permanent%20Campus)!5e0!3m2!1sen!2sbd!4v1703667290099!5m2!1sen!2sbd"

        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/rkfVrqH/1560206047-2.jpg" alt="" />
                        <p className="text-center">Permanent Campus</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Contact;