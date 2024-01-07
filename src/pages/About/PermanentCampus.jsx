import { Link } from 'react-router-dom';
import LogoNav from '../../shared/LogoNav';
import SecondaryNav from '../../shared/SecondaryNav';
import TertioryNav from '../../shared/TertioryNav';
import Campus from '../home/Campus';
import banner from "../../assets/parmanent campus.png"
const PermanentCampus = () => {
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
      <div className=" bg-slate-300">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <Link to='/about-us/vision-mission'><p className='hover:underline'>About Us</p></Link>
            <p>/</p>
            <p>Permanent Campus</p>
            
        </div>
        </div>

        <div className='mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5'>

            <h1 className='text-[#f4253f] text-lg font-normal'>Salient Features Of Permanent Campus</h1>
            <p>Permanent Campus is located in the centre of communication at KHA 224, Progati Sarani, Merul Badda, Dhaka 1212. It is close to Hatirjhil, Rampura, Aftabnagar, Banasree, Niketon, Mohakhali, Gulshan, Banani and Baridhara Residential Areas. Total land area of the project is 5 acres and building will have a total of 17,00,000 square feet.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o9WLJOwwRLo?si=-mTPRwsoERCWMAq1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>It is a 13 storey building with 3 basements. There is an auditorium with 700 seats, a multipurpose hall with 1850 seats, classrooms, labs, design studios, lecture theatres, 475 car parking places, rooftop playground, park, vertical transportation, substations, data centre for IT related use, UPS, CCTVs, solar panels, lifts, escalators, stairs, fire escapes, faculty and administrative offices, teacher’s lounges, a cafeteria, an e-library, recreation facilities and a lake.</p>
            <p>It has facilities to accommodate around 12,000-15,000 students. It is a green conceptual building where natural light and air can easily flow into the building. Almost 50% of the land is used for building and the rest for water body, lake, plantation and other purposes aimed at providing biodiversity. The advanced, eco-friendly and attractive campus will enhance the University spirit, thereby creating a healthy and positive environment for the students. WOHA Designs Pte Ltd., Singapore based world-renowned architectural firm has designed this project.</p>

        </div>

        <Campus></Campus>
            
        </div>
    );
};

export default PermanentCampus;