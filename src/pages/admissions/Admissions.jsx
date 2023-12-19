import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import Scholarship from "../home/Scholarship";
import { IoMdArrowDropright } from "react-icons/io";


const Admissions = () => {
    return (
        <div>

<LogoNav></LogoNav>
            <SecondaryNav></SecondaryNav>
            <div>
        <img
          className="w-full h-96"
          src="https://i.ibb.co/g9cfVbK/polygonal19.jpg"
          alt=""
        />
      </div> 
      <div className=" bg-slate-300 py-5">
        <div className="flex gap-3 mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <Link to='/'><p className="hover:underline">Home</p></Link>
            <p>/</p>
            <p>Admissions</p>
        </div>
        </div>

        <div className="bg-slate-500">  

<div className="flex flex-col justify-center items-center h-screen mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 gap-10">

    <div className="flex flex-col gap-10 text-center">
        <h1 className="font-roboto font-normal text-3xl lg:text-5xl text-white">Spring 2024 Intake</h1>
        <h2 className="font-normal text-3xl text-logoRed">Admission test date</h2>
        <p className="text-white font-normal font-nunito text-2xl">Undergraduate program: 10 November 2023 at 3:00 pm</p>
        <p className="text-white font-normal font-nunito text-2xl">Postgraduate program: 17 November 2023</p>
    </div>
    <div className="mt-10">
        <button className="btn btn-error text-white hover:bg-blue-500">Apply Now</button>
    </div>

</div>
</div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-3">
    <h1 className="font-roboto font-normal text-4xl text-red-500">Join the “Highest ranked among private universities in Bangladesh - QS Asian University rankings 2018.” </h1>
    <div style={{
    boxShadow: '-8px 0px 12px -4px rgba(0, 0, 0, 0.1)', // Adjust the values to suit your design
  }} className="flex flex-col gap-2 p-3 shadow-md-left">
  <p className="font-nunito text-base text-blue-500">
    Canadian University Of Bangladesh (BracU) always pays close attention to convenient approach in terms of Admission Procedures. The entire admission process will be online and applicants can apply from the convenience of their home. The entire process of admission goes through an intensely selective method where applicants are asked to follow each phase precisely within the given framework of instructions. To get admitted into BracU, applicants must qualify in the admission test (written and an interview) after submitting their online application form.
  </p>
  <p className="font-nunito text-base text-blue-500">
    As the admission test is a highly competitive one, applicants are required to perform satisfactorily in the examination in order to secure their seats.
  </p>        
</div>

</div>

<div className="bg-red-500 h-screen">
    <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="font-normal text-4xl text-white py-10">Undergraduate Admissions</h1>

        <div className="flex flex-row items-center">
            <div className="basis-1/2">
                <img src="https://canadianuv.netlify.app/sites/default/files/styles/16_9_medium_530x298/public/banner-images/143E8C82-95A6-4AA0-B2F8-CC98D1C173F3.jpeg" alt="" />
            </div>
            <div className="flex flex-col basis-1/2 gap-5">
                <p className="font-nunito font-normal text-lg text-white">Canadian University Of Bangladesh excels at educating undergraduate students! Get yourself admitted to the Nation’s highest ranking private university as ranked in the QS Asian University rankings 2018 and build yourself a successful career!!</p>
                <div><button className="btn btn-primary bg-white text-black">Apply Now</button></div>
            </div>
        </div>
    </div>    
</div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 text-center flex flex-col gap-5">
    <h1 className="font-roboto font-normal text-5xl text-red-500">Get yourself ready!</h1>
    <p className="font-normal text-2xl">Find answer of your queries and admission test sample questions for various programs.</p>
    <div className="flex justify-center gap-3">
        <div><button className="btn btn-primary bg-white text-black">Sample Question</button></div>
        <div><button className="btn btn-primary bg-white text-black">FAQs</button></div>
        <div><button className="btn btn-primary bg-white text-black">Admission Flyer</button></div>
        <div><button className="btn btn-primary bg-white text-black">Freshman Fee Structure</button></div>
    </div>
       
    </div>

    <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="font-normal font-roboto text-4xl mb-10 text-red-500">Postgraduate Admission</h1>
        <div className="grid grid-cols-2 gap-3">
            <div className="">
                <p className="font-normal text-base">The advantage of Postgraduate study is that it allows students to enter employment with additional skills and knowledge. One of the benefits of a Postgraduate research degree and the purpose of research is the output of original contributions to knowledge. The degree can demonstrate capability and tenacity to undertake an extended piece of investigative work.</p>
                <div className="flex gap-3">
                    <div className="mt-10"><button className="btn btn-error text-white hover:bg-blue-500">Apply Now</button></div>
                    <div className="mt-10"><button className="btn btn-error text-white hover:bg-blue-500">Admission Requirements</button></div>
                </div>
                    <div className="mt-5"><button className="btn btn-error text-white hover:bg-blue-500">Waiver for Postgraduate Programs</button></div>
                
            </div>
            <div>
                <h1 className="p-2 bg-slate-300 font-bold text-base">Postgraduate Programs</h1>
            </div>

        </div>
    </div>
    <Scholarship></Scholarship>
    <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="font-normal font-roboto text-4xl mb-10 text-red-500">International Students’ Admissions</h1>
        <div className="grid grid-cols-2 gap-3">
            <div className="">
                <p className="font-normal text-base">Canadian University Of Bangladesh personifies a broad portrayal of states and cultures from all over the world in a single platform. International Students are given special attention and care to make the foreign students feel at home. Our stature regarding International Students comes firstly from an excellent broad-based education and the factual commitment we provide to every pupil.</p>
                    <div className="mt-5"><button className="btn btn-error text-white hover:bg-blue-500">View More<IoMdArrowDropright className="text-2xl" />
</button></div>
                
            </div>
            <div>
                <h1 className="p-2 bg-slate-300 font-bold text-base">International Students’ Admissions</h1>
            </div>

        </div>
    </div>

            
        </div>
    );
};

export default Admissions;