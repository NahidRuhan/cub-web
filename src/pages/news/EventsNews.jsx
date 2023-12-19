import { Link, useLoaderData } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import NewsComponent from "../../shared/NewsComponent";

const EventsNews = () => {   

    const news = useLoaderData();

    return (
        <div>

            
<LogoNav></LogoNav>
            <SecondaryNav></SecondaryNav>

      <div className=" bg-slate-300 py-5">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <p>News and Events</p>
        </div>
        </div>
        
        <h1 className="text-center text-red-500 text-3xl my-5">CUB News</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-10">
            {
                news.map((news,ind)=>(<NewsComponent key={ind} news={news}></NewsComponent>))
            }
        </div>            
        </div>
    );
};

export default EventsNews;