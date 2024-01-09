import { Link } from "react-router-dom";
const Scholarship = () => {
    const backgroundImageUrl = 'https://i.ibb.co/WFcVWg5/image.jpg';

    return (
        <div
            className="bg-slate-500 text-white"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col justify-center items-center h-screen mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl pt-36 gap-3 lg:gap-10">
                <div className="flex flex-col gap-3 lg:gap-10 text-center">
                    <h1 className="font-roboto font-normal text-3xl lg:text-5xl">Scholarships and Financial Aid</h1>
                    <p className="font-nunito font-normal text-base lg:text-2xl">Each semester, Canadian University Of Bangladesh is proud to honor academically talented and exceptionally skilled students with a variety of scholarships and awards. The university annually awards more than 100 million takas as scholarships to both undergraduate and postgraduate students.</p>
                </div>
                <div className="mt-5 lg:mt-10">
                    <Link to='/admissions/scholarship'>
                    <button className="btn btn-error text-white">Know More</button>
                    </Link> 
                    
                </div> 
            </div>
        </div>
    );
};

export default Scholarship;
