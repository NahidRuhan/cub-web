import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
const Career = () => {
    return (
        <div>
            <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <img
          className="w-full h-96"
          src="https://i.ibb.co/bBTKqtp/banner2.jpg"
          alt=""
        />

            <div className=" bg-slate-300">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <p>Career</p>
        </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">

            <div className="flex flex-col gap-5 py-5">
            <h1 className="text-center font-medium text-xl md:text-2xl">Internship/Apprenticeship/Job Opportunity</h1>
            <p className="font-nunito">Canadian University of Bangladesh (CUB) believes in shaping not just education but also careers. CUB is thrilled to announce a range of exceptional internship, apprenticeship, and job opportunities specially curated for the talented CUB students and other university students seeking valuable hands-on experience. This is your chance to gain practical insights, harness your skills, and take that crucial step towards a successful and fulfilling career. Join in this exciting journey of growth and exploration!</p>
            </div>

            <div className="py-5 flex flex-col gap-5">
                <h1 className="text-center font-medium text-xl md:text-2xl">Career and Job Placement</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0.5">

                    <div className="border-2 p-3">
                        <img src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/digicon.jpg?m=1694497822" alt="" />
                        <h1 className="font-semibold text-lg">Partnership with Digicon:</h1>
                        <p>CUB is excited to announce its partnership with Digicon, a renowned Business Process Outsourcing (BPO) solutions provider. This collaboration aims to bridge the skills gap in the BPO industry and create employability opportunities for CUB graduates.</p>
                    </div>
                    <div className="border-2 p-3">
                        <img src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/news_bangla.jpg?m=1694497820" alt="" />
                        <h1 className="font-semibold text-lg">News Bangla (100% Job Placement)</h1>
                        <p>News Bangla is committed to ensuring 100% job placement for CUB graduates. By understanding the importance of providing students with the skills and opportunities they need to excel in their careers, News Bangla equips students with the knowledge and practical experience needed to succeed in the dynamic field of journalism and media.</p>
                    </div>
                    <div className="border-2 p-3">
                        <img src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/dainik_bangla.jpg?m=1694497820" alt="" />
                        <h1 className="font-semibold text-lg">Dainik Bangla (100% Job Placement)</h1>
                        <p>CUB has forged strong connections with leading media organization, Dainik Bangla to facilitate 100% job placement opportunities for the graduates. With focus on practical skills, critical thinking, and creativity the rigorous training programs are designed to prepare students for the challenges of the media industry.</p>
                    </div>
                    <div className="border-2 p-3">
                        <img src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/kaw.jpg?m=1694497819" alt="" />
                        <h1 className="font-semibold text-lg">The KOW Company</h1>
                        <p>Discover your potential and embark on a fulfilling career journey with The Kow Company.</p>
                    </div>

                </div>
            </div>

            <div className="py-5">
                <h1 className="text-center font-medium text-xl md:text-2xl py-5">Placement Contact</h1>
                <div className="flex justify-center items-center gap-10">
                    <img className="w-32" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/lamia%20salim.png?m=1694497811" alt="" />
                    <div>
                        <p className="font-bold">Lamia Salim</p>
                        <p>Head of Placements</p>
                        <p>Contact Number: +88018869705168</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
  <h1 className="text-center font-medium text-xl md:text-2xl py-5">CUB Career at a Glance</h1>

  <div className="flex justify-center">
    <img className="w-1/4" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/5.jpg?m=1694497825" alt="" />
    <img className="w-1/4" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/3%20%282%29.jpg?m=1694497834" alt="" />
    <img className="w-1/4" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/2_2_50.jpg?m=1694497996" alt="" />
  </div>

  <div className="flex justify-center">
    <img className="w-1/4" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/4%20%281%29.jpg?m=1694497832" alt="" />
    <img className="w-1/4" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/1_3_50.jpg?m=1694497993" alt="" />
    <img className="w-1/4" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/career_Job_placement/6.jpg?m=1694497832" alt="" />
  </div>
</div>



        </div>


        </div>
        
    );
};

export default Career;