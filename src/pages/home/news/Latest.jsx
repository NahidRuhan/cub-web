import latest1 from "../../../assets/latest1.jpg"
import latest2 from "../../../assets/latest2.jpg"
import latest3 from "../../../assets/latest3.jpg"
import host from '../../../assets/latest4.jpeg'
import { SlCalender } from "react-icons/sl";

const Latest = () => {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[750px] xl:h-[650px] ">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src={latest1} alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">CUB and Texas A&M University Lab Sign Memorandum of Understanding to Promote Collaboration in Education and Research</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">The CUB and the Texas A&M University Lab have signed a MoU to promote collaboration in the areas of faculty and student exchange, joint research</p>
        </div>
      </div>

      

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[700px] xl:h-[650px]">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src={latest2} alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">এইচএসসির কৃতি শিক্ষার্থীদের সংবর্ধনা দিল কানাডিয়ান ইউনিভার্সিটি অব বাংলাদেশ</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">কানাডিয়ান ইউনিভার্সিটি অব বাংলাদেশের পক্ষ থেকে ২০২৩ সালের এইচএসসি ও সমমান পরীক্ষায় উত্তীর্ণ কৃতি শিক্ষার্থীদের বর্ণাঢ্য সংবর্ধনা দেওয়া হয়েছে</p>
        </div>
      </div>


      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[700px] xl:h-[650px]">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src={latest3} alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">বাংলাদেশের বিজয়ের ৫২ বছর পূর্তি উপলক্ষে কানাডিয়ান ইউনিভার্সিটি অব বাংলাদেশে বিশেষ আলোচনা</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">সভায় সভাপতিত্ব করেন ভারপ্রাপ্ত উপাচার্য প্রফেসর ড. গিয়াস উ আহসান। প্রধান অতিথি ছিলেন বোর্ড অব ট্রা‌স্টিজ এর চেয়ারম‌্যান ড. চৌধুরী নাফিজ সরাফাত।</p>
        </div>
      </div>


      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[700px] xl:h-[650px]">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src={host} alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">CUB and DSE Successfully Hosted Seminar on Corporate Sustainability</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">The Canadian University of Bangladesh (CUB) and Dhaka Stock Exchange, jointly hosted a seminar on Corporate Sustainability on December 3, 2023, at CUB auditorium</p>
        </div>
      </div>


    </div>
    );
};

export default Latest;