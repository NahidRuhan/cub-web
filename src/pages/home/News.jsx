import { useState } from "react";
import Latest from "./news/Latest";
import Featured from "./news/Featured";
import Events from "./news/Events";

const News = () => {

    const [latest,setLatest] = useState(true);
    const [featured,setFeatured] = useState(false);
    const [events,setEvents] = useState(false);

    return (
        <div>
            <h1 className="text-center text-red-500 font-normal text-4xl py-10">University News and Notices</h1>
            <div className="flex gap-5 justify-center">
            <div><button onClick={()=>{
            setLatest(true);
            setFeatured(false);
            setEvents(false);
            }} className={latest ? `btn btn-primary bg-red-500 text-black `: `btn btn-primary bg-white text-black `}>Latest News</button></div>
            <div><button onClick={()=>{
                setFeatured(true);
                setLatest(false);
                setEvents(false);
            }} className={featured ? `btn btn-primary bg-red-500 text-black `: `btn btn-primary bg-white text-black `}>Featured Events</button></div>
            <div><button onClick={()=>{
                setEvents(true);
                setLatest(false);
                setFeatured(false);
            }} className={events ? `btn btn-primary bg-red-500 text-black `: `btn btn-primary bg-white text-black `}>Events</button></div>
            {/* <div><button className="btn btn-primary bg-white text-black">Events</button></div>
            <div><button className="btn btn-primary bg-white text-black">In Medea</button></div> */}
            </div>

            {latest && <Latest></Latest>}
            {featured && <Featured></Featured>}
            {events && <Events></Events>}
        </div>
    );
};

export default News;