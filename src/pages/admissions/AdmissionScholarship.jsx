import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const AdmissionScholarship = () => {
    return (
        <div>
                        <SecondaryNav></SecondaryNav>

            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="bg-logoRed text-white">
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 h-52 items-center">

                <h1 className="text-3xl md:text-4xl lg:text-6xl py-3">Scholarship / Financial Aid</h1>
                <div className="flex gap-3">
                <Link to='/'><p className="hover:underline">Home</p></Link>
                <p>/</p>
                <Link to='/admissions'><p className="hover:underline">Admission</p></Link>
                <p>/</p>
                <p>Scholarship</p>                    
                </div>

            </div>                
            </div>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5">

            <div className="flex flex-col gap-3">
    <p className="text-4xl text-red-700">Merit-Based Scholarship During Admission (undergrad):</p>

    <div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5">Application Tuition Fee Waiver: 100%</p>
    <div className="bg-white p-5">
        <p className="font-bold">Eligibility</p>
    <p><li className="list-disc py-2"> <span className="font-bold">National Curriculum (both Bangla & English version): </span>
Students who obtained GPA of 5.0 (without 4th subject) in both SSC and HSC (Golden A plus).</li></p>
    <p><li className="list-disc py-2"> <span className="font-bold">International Curriculum: </span>
    A grade in all subjects of Ordinary level (at least 5 subjects) and Advance level (at least 2 subjects).</li></p>
    </div>

    <div className="bg-white p-5">
        <p className="font-bold">Conditions</p>
    <p><li className="list-disc py-2"> This Scholarship will be effective for the first trimester/semester only.</li></p>
    <p><li className="list-disc py-2"> This Scholarship will only apply to regular undergraduate and graduate students and will not be applicable to Diploma and Transfer students.</li></p>
    </div>


    <p className="font-bold bg-slate-200 p-5">Application Tuition Fee Waiver: 50%</p>
    <div className="bg-white p-5">
        <p className="font-bold">Eligibility</p>
    <p><li className="list-disc py-2"> <span className="font-bold">National Curriculum (both Bangla & English version): </span>Students who obtained GPA of 5.0 (with 4th subject) in both SSC and HSC.</li></p>
    <p><li className="list-disc py-2"> <span className="font-bold">International Curriculum: </span>
    Atleast 4 &apos;A&apos; grades in ine Ordinary level subjects and at least 1 &apos;A&apos; Advance level subjects.
The rest of the subjects of both levels must have at least a B grade.</li></p>
    </div>

    <div className="bg-white p-5">
        <p className="font-bold">Conditions</p>
    <p><li className="list-disc py-2"> To continue with the scholarship benefit, the student must maintain a CGPA of 3.80 in each consecutive trimester/semester.</li></p>
    <p><li className="list-disc py-2"> The student must take at least 12 credit hours in each trimester/semester-except their last trimester/semester with the university.</li></p>
    </div>



    <p className="font-bold bg-slate-200 p-5">Application Tuition Fee Waiver: 25%</p>
    <div className="bg-white p-5">
        <p className="font-bold">Eligibility</p>
    <p><li className="list-disc py-2"> <span className="font-bold">National Curriculum (both Bangla & English version): </span>Students who obtained a combined GPA of 9.00 in SSC and HSC but did not obtain below a GPA of 4.00 in any level.</li></p>
    <p><li className="list-disc py-2"> <span className="font-bold">International Curriculum: </span>
    Atleast 3 &apos;A&apos; grades in the Ordinary level subjects and at least 1 &apos;A&apos; Advance level subjects:
The rest of the subjects of both levels must have at least a &apos;B&apos; grade.</li></p>
    </div>

    <div className="bg-white p-5">
        <p className="font-bold">Conditions</p>
    <p><li className="list-disc py-2"> The Scholarship is only applicable to tuition fees for regular courses.</li></p>
    <p><li className="list-disc py-2"> The Scholarship will not be applicable for tuition fees for retake/incomplete/seli-study courses; admission fees, trimester/semester activity fees, or any other fees, penalties, or fines.</li></p>
    </div>

    
</div>


</div>


               
            </div>

        </div>
    );
};

export default AdmissionScholarship;