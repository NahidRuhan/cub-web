import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
import banner from '../../assets/nav event banner.png'
import { Link } from "react-router-dom";
import NewsComponent from "../../shared/NewsComponent";
const NavEvents = () => {
    const events = [
        {
            img: '',
            title: 'ICBM 2019',
            description: 'Brac Business School (BBS), Canadian University Of Bangladesh, Bangladesh organized its 2nd International Conference on Business and Management (ICBM 2019) under the theme of “Industry Focused Global Research Trends in Business and Management” on April 25-27, 2019 at The Westin, Dhaka, Bangladesh.'
        },
        {
            img: '',
            title: 'ICEPE 2019',
            description: 'A three-day International Conference on Energy and Power Engineering (ICEPE 2019), starting on the 14th March, 2019, was organized by The Department of Electrical and Electronic Engineering (EEE) of Canadian University Of Bangladesh (BracU) ended on Saturday, 16 March 2019.'
        },
        {
            img: '',
            title: 'ICBM 2017',
            description: 'Brac Business School (BBS), Canadian University Of Bangladesh, Bangladesh organized its 1st International Conference on Business and Management (ICBM 2017) under the theme of “Global Contemporary Practices in Business and Management” on September 21-22, 2017.'
        },
        {
            img: '',
            title: 'International conference on “Redrawing Gender Boundaries in Literary Terrains”',
            description: 'The Department of English and Humanities, Canadian University Of Bangladesh has organized a two-day conference on May 18-19, 2017 to deliberate on these and related issues.'
        },
        {
            img: '',
            title: 'Department of English and Humanities organises International Conference on First Language Acquisition',
            description: 'The Department of English and Humanities has organized an international conference on Language Acquisition, Impairment, and Intervention, held on 24 March 2016.'
        },
        {
            img: '',
            title: 'Inter-University Conference on New Directions in Literary Research',
            description: 'The Department of English and Humanities, Canadian University Of Bangladesh organized a two-day inter-university conference for students and fresh graduates from May 19-20, 2016.'
        },
        {
            img: '',
            title: '19th International Mathematics Conference, Dhaka, 18-20 December 2015',
            description: 'In collaboration with Bangladesh Mathematical Society, Mathematics and Natural Sciences (MNS) Department, Canadian University Of Bangladesh organized the above-mentioned Conference from 18 - 20 December, 2015 in Dhaka, Bangladesh. The theme of the Conference was: “Mathematics: Enigma and Reality”.'
        },
        {
            img: '',
            title: 'Canadian University Of Bangladesh Hosts 7th ICCIT',
            description: 'The seventh International Conference on Computer and Information Technology (ICCIT 2004), hosted by Canadian University Of Bangladesh, was inaugurated at the Plenary Hall of the China-Bangladesh Friendship Conference Centre on December 26, 2004.'
        },
        {
            img: '',
            title: 'Math Olympiad in BracU',
            description: 'Department of Mathematics and Natural Sciences (MNS) of Canadian University Of Bangladesh organised the “Inter University Mathematics Olympiad 2011” on Friday, December 10, 2011, in collaboration with Bangladesh Mathematical Society (BMS).'
        },
        {
            img: '',
            title: '8th National Undergraduate Mathematics Olympiad- 2016',
            description: 'The Department of Mathematics and Natural Sciences (MNS) in collaboration with Bangladesh Mathematical Society (BMS) organized the Regional Round (Dhaka North Region) of the 8th National Undergraduate Mathematics Olympiad- 2016 on November 12, 2016 at the Canadian University Of Bangladesh.'
        }
    ];
    
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div>
        <img
          className="w-full h-96"
          src={banner}
          alt=""
        />
      </div> 
      <div className=" bg-slate-300">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <p>Conference</p>
        </div>
        </div>

        <div className="w-full h-96 bg-yellow-700 flex justify-center items-center text-center text-white">
  <h1 className="text-3xl">National and International conferences, hosted by Canadian University Of Bangladesh</h1>
</div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {
            events.map((event,ind)=>(<NewsComponent key={ind}  news={event}></NewsComponent>))
        }


    </div>

</div>

            
        </div>
    );
};

export default NavEvents;