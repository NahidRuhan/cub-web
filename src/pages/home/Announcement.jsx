import { SiWindows } from "react-icons/si";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div className="bg-logoRed text-white">

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">  

            <div className="flex flex-col items-start">
    <h1 className="font-normal text-4xl">Announcements</h1>
    <hr className="w-64 h-1 bg-white" /><hr className="w-full items-center"/>
</div>

                <div className="flex flex-col gap-6 font-normal text-base md:text-xl">

                    <div className="flex flex-col">
                        <p className="flex items-center gap-3"><SiWindows /><Link><span>Grade Review Notice</span></Link></p>
                        <p className="text-xs">2023-11-12</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>
                    

                    <div className="flex flex-col">
                    <p className="flex items-center gap-3"><SiWindows /><Link><span>Bangabandhu Sheikh Mujib Scholar 2023</span></Link></p>
                        <p className="text-xs">2023-10-11</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>


                    <div className="flex flex-col">
                    <p className="flex items-center gap-3"><SiWindows /><Link><span>Mid-Term Exam schedule for Fall 2023 (Mohakhali Campus)</span></Link></p>
                        <p className="text-xs">October 28th, 2023</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>


                    <div className="flex flex-col">
                    <p className="flex items-center gap-3"><SiWindows /><Link><span>Course Registration Process</span></Link></p>
                        <p className="text-xs">2023-10-10</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>


                    <div className="flex flex-col">
                    <p className="flex items-center gap-3"><SiWindows /><Link><span>Holiday Notice</span></Link></p>
                        <p className="text-xs">2023-09-03</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>



                    <div className="flex flex-col">
                    <p className="flex items-center gap-3"><SiWindows /><Link><span>Academic Events 2023 (Except LLB Program)</span></Link></p>
                        <p className="text-xs">2023-06-08</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>


                    <div className="flex flex-col">
                    <p className="flex items-center gap-3"><SiWindows /><Link><span>Registration Week - Summer 2023</span></Link></p>
                        <p className="text-xs">2022-06-07</p>
                    </div>

                    <div>
                        <hr className="text-2xl w-auto" />
                    </div>



                </div>

            </div>

            
        </div>
    );
};

export default Announcement;