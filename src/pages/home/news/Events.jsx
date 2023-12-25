import events1 from '../../../assets/events1.jpg' 
import events2 from '../../../assets/events2.jpg' 
import events3 from '../../../assets/events3.jpg' 
import events4 from '../../../assets/events3.jpg' 
import { SlCalender } from "react-icons/sl";


const Events = () => {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[500px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={events1} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">1st Convocation of CUB</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">Chief Guest President Md. Abdul Hamid and Convocation Speaker Nobel Laureate Kailash Satyarthi.</p>
  </div>
</div>



<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[500px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={events2} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Open session on Meet the Masters held at CUB</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">Canadian University of Bangladesh organized a session Meet the Masters on Sunday at CUB auditorium.</p>
  </div>
</div>


<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[500px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={events3} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Computer Professionals Program held at CUB</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">CSE department of CUB organized a Seminar on Computer Professionals of MIU at CUB Auditorium</p>
  </div>
</div>


<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[500px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src={events4} alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">CUB hosts Entrepreneurship Readiness</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito">CUB hosts Entrepreneurship Readiness</p>
  </div>
</div>


</div>
    );
};

export default Events;