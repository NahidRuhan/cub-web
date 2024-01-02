import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const Vc = () => {
    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>


<div className="w-full h-52 bg-slate-700 flex justify-center items-center text-center text-white">
  <h1 className="text-3xl">Message From Vice Chancellor</h1>
</div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
    <div className="lg:w-1/3">
        <img className="w-full rounded-lg" src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/management/vc-sir.jpg?m=1685272696" alt="Chairman" />

    </div>
    <div className="lg:w-1/2">
        <div className="flex flex-col gap-5">
            <p>Our University exists for the sole purpose of transferring knowledge and experience from those of us who have it to those of us who need it. We make every effort to deliver practice based knowledge in ways that make it possible for us help each other solve our problems. This is the fundamental basis of our human existence. It is the fundamental challenge of our University. We are rewarded exclusively on the basis of how well we do this important work; how able we are to apply our cumulative knowledge and experience to solving humanities most intractable problems, hunger, poverty, inequality and waste.</p>
            <div>
            <p className="text-lg font-normal text-[#f4253f]">Prof. DR. H M JAHIRUL HAQUE</p>
            <p className="text-base font-normal text-[#f4253f]">Vice Chancellor</p>
            <p className="text-base font-normal text-[#f4253f]">Canadian University of Bangladesh</p>                
            </div>


        </div>            
    </div>
</div>
</div>
            
        </div>
    );
};

export default Vc;