import featured1 from '../../../assets/featured1.jpg'
import featured2 from '../../../assets/featured2.jpg'
import featured3 from '../../../assets/featured3.jpg'
import featured4 from '../../../assets/featured4.jpg'
import { SlCalender } from "react-icons/sl";


const Featured = () => {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[650px] xl:h-[550px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={featured1} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Carpe Diem English Club Orientation Event at Canadian University of Bangladesh</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">The Department of English at the Canadian University of Bangladesh (CUB) hosted a dynamic orientation for the Carpe Diem English Club on 25th November 2023</p>
  </div>
</div>



<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[650px] xl:h-[550px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={featured2} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">The Annual Debate Competition Successfully Held In CUB</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">The CUB Debating Society (CUBLDS) concluded its annual debate competition, CUBLDS 2nd Inter-Batch Debate Competition 2023, on November 4, 2023.</p>
  </div>
</div>


<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[650px] xl:h-[550px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={featured3} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Theater at CUB Auditorium by Carpe Diem Club</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">Eng Dept of CUB presents “The Tragic Fate of Medusa” with famous actor Riaz Ahmed at CUB Auditorium</p>
  </div>
</div>


<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[650px] xl:h-[550px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={featured4} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Banglalink Youth Fest 2023 at CUB</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">Banglalink Youth Fest 2023 at CUB with thrilling games, vibrant booths, and unforgettable memories!</p>
  </div>
</div>


</div>
    );
};

export default Featured;