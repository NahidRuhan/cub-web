import { Link } from "react-router-dom";
import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const TuitionAndFees = () => {
    return (
        <div>
                        <SecondaryNav></SecondaryNav>

                        <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="bg-logoRed text-white">
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 h-60 items-center">

                <h1 className="text-3xl md:text-4xl lg:text-6xl py-3">Tuition and Fees</h1>
                <div className="flex gap-3">
                <Link to='/'><p className="hover:underline">Home</p></Link>
                <p>/</p>
                <Link to='/admissions'><p className="hover:underline">Admissions</p></Link>
                <p>/</p>
                <p>Tuition and Fees</p>                    
                </div>

            </div>                
            </div>
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5">
                <div className="text-red-700 text-2xl">
                    <p>Admission Application Fee Tk. 1,500/-  Non-Refundable  [Through bKash, Dhaka Bank Ltd, One Bank Ltd, Southeast Bank Ltd, Brac Bank Ltd, Prime Bank Ltd.]</p>
                    <p>Fees for New Undergraduate Students effective from Fall 2023 (for Pharmacy and LLB from Spring 2024) onwards</p>
                    <p className="mt-3">Non-refundable Fees* during admission for undergraduate program</p>                    
                </div>

                <div style={{ overflowX: 'auto' }}>
  <table style={{ width: 'max-content', tableLayout: 'fixed' }}>
  <tr>
    <th style={{ border: '1px solid' }}>Particular</th>
    <th style={{ border: '1px solid' }}>PHR</th>
    <th style={{ border: '1px solid' }}>LLB (for Fall 2023)</th>
    <th style={{ border: '1px solid' }}>LLB (From spring 2024)</th>
    <th style={{ border: '1px solid' }}>ARC & CSE</th>
    <th style={{ border: '1px solid' }}>Other Programs</th>
    <th style={{ border: '1px solid' }}>Note</th>
  </tr>
  <tr>
    <td style={{ border: '1px solid' }}>Admission fee</td>
    <td style={{ border: '1px solid' }}>Tk. 30,800/-</td>
    <td style={{ border: '1px solid' }}>Tk. 30,800/-</td>
    <td style={{ border: '1px solid' }}>Tk. 30,800/-</td>
    <td style={{ border: '1px solid' }}>Tk. 30,800/-</td>
    <td style={{ border: '1px solid' }}>Tk. 30,800/-</td>
    <td style={{ border: '1px solid' }}>One time</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid' }}>Course Fee</td>
    <td style={{ border: '1px solid' }}>Tk. 22,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 19800/-</td>
    <td style={{ border: '1px solid' }}>Tk. 24000/-</td>
    <td style={{ border: '1px solid' }}>Tk. 22,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 22,500/-</td>
    <td style={{ border: '1px solid' }}>For one course</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid' }}>Semester Fee</td>
    <td style={{ border: '1px solid' }}>Tk. 12,750/-</td>
    <td style={{ border: '1px solid' }}>Tk. 11,550/-</td>
    <td style={{ border: '1px solid' }}>Tk. 12,750/-</td>
    <td style={{ border: '1px solid' }}>Tk. 11,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 8,500/-</td>
    <td style={{ border: '1px solid' }}>-</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid' }}>Library Membership Fee</td>
    <td style={{ border: '1px solid' }}>Tk. 2,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 2,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 2,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 2,500/-</td>
    <td style={{ border: '1px solid' }}>Tk. 2,500/-</td>
    <td style={{ border: '1px solid' }}>One time</td>
  </tr>
  <tr>
    <th style={{ border: '1px solid' }}>Total</th>
    <th style={{ border: '1px solid' }}>Tk. 68,550/-</th>
    <th style={{ border: '1px solid' }}>Tk. 64,650/-</th>
    <th style={{ border: '1px solid' }}>Tk. 70,050/-</th>
    <th style={{ border: '1px solid' }}>Tk. 67,300/-</th>
    <th style={{ border: '1px solid' }}>Tk. 64,300/-</th>
    <th style={{ border: '1px solid' }}>-</th>
  </tr>  </table>
</div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-red-700 font-semibold">Freshman Course Offerings:</h1>
                    <p>On the basis of the admission test results, a student will have to take one or more of the following courses:</p>
                </div>
                <div>
                    <p>a. ENG 101 (Credit course)</p>
                    <p>b. ENG 102 (Credit course)</p>
                    <p>c. ENG 091 (Non credit course)</p>
                    <p>d. MAT 091 (Non credit course)</p>
                    <p>e. MAT 092 (Non credit course)</p>
                </div>
                <p>The exact number of course(s) a student is required to take will be shown against each name of the student in the test result.</p>
                <p>Initial admission fee includes a fee one course. Any additional course up to a maximum of four (4) in total,  will incur a fee of Tk. 22,500 (all program except LAW) for each subsequent course.</p>
                <p>In case of LAW Tk. 24,000 will be incurred for each subsequent course.</p>
                <p>If a freshman is prescribed two (02) non-credit courses, the third course for him/her is optional.</p>
            </div>
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-red-700">Notes:</h1>
                <ul className="list-inside">
    <li className="list-disc py-2">B.Arch Studio Fee per Credit Tk. 8,000</li>
    <li className="list-disc py-2">LLB Tuition Fee per Credit Tk. 6,600</li>
    <li className="list-disc py-2">Tuition Fee per Credit Tk. 7,500</li>
</ul>


<p>*Fees can be changed as per the decision of the university</p>
<div><button className="btn btn-error">Other Fees</button></div>

<div className="flex flex-col gap-3">
    <p className="text-4xl text-red-700">Fees for New Postgraduate Students effective from Fall 2023*</p>
    <p className="font-bold text-red-700">Admission Application Fee Tk. 1,500/-  Non-Refundable  [Through bKash, Dhaka Bank Ltd, One Bank Ltd, Southeast Bank Ltd, Brac Bank Ltd, Prime Bank Ltd.]</p>
</div>

<div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5"> Fresher Enrollment Fees</p>
    <p className="bg-white p-5"><li className="list-disc py-2"> Admission Fee (Non- Refundable)    Tk. 27,500 (One Time)</li></p>
    <p className="font-bold bg-slate-200 p-5">Tuition Fee per credit</p>
    <div className="bg-white p-5">
    <p><li className="list-disc py-2"> For EMBA/MBM   Tk. 7,200</li></p>
    <p><li className="list-disc py-2"> For All Other Programs    Tk. 6,600</li></p>
    </div>
    <p className="font-bold bg-slate-200 p-5"> Semester Fee</p>
    <p className="p-5"><li className="list-disc py-2">  Fee Per Semester (IT facility, Library, Student Activities)    Tk. 4,000</li></p>
    
</div>
<div className="flex flex-col gap-3">
    <p className="text-4xl text-red-700">Fees for Postgraduate Students (all students enrolled till Summer 2023)*</p>
    <p className="font-bold text-red-700">Admission Application Fee Tk. 1,500/-  Non-Refundable  [Through bKash, Dhaka Bank Ltd, One Bank Ltd, Southeast Bank Ltd, Brac Bank Ltd, Prime Bank Ltd.]</p>
</div>

<div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5"> Fresher Enrollment Fees</p>
    <p className="bg-white p-5"><li className="list-disc py-2"> Admission Fee (Non- Refundable)    Tk. 25,000 (One Time)</li></p>
    <p className="font-bold bg-slate-200 p-5">Tuition Fee per credit</p>
    <div className="bg-white p-5">
    <p><li className="list-disc py-2"> For EMBA/MBM   Tk. 6,500</li></p>
    <p><li className="list-disc py-2"> For All Other Programs    Tk. 6,000</li></p>
    </div>
    <p className="font-bold bg-slate-200 p-5"> Semester Fee</p>
    <p className="p-5"><li className="list-disc py-2">  Fee Per Semester (IT facility, Library, Student Activities)    Tk. 3,000</li></p>
    
</div>

<h1 className="text-3xl text-red-700">Mode of Payment:</h1>

<div className="flex flex-col md:flex-row gap-3">
    <div>
        <p className="font-bold text-xl">For Foreign Students</p>
        <p className="bre break-all">Account Name: Canadian University Of Bangladesh (Collection A/C)</p>
        <p>Account Number: 1501200132106002</p>
        <p>Bank Name: BRAC Bank Ltd.</p>
        <p>Bank Address: 1, Gulshan Avenue, Gulshan, Dhaka-1212</p>
        <p>Swift: BRAKBDDH</p>
    </div>
    <div>
        <p className="font-bold text-xl">For Local Students</p>
        <p>BRAC Bank Ltd. (Any Branch Except Agent Banking)</p>
        <p>Dhaka Bank Ltd. (Any Branch)</p>
        <p>IFIC Bank Ltd. (Mohakhali Branch)</p>
        <p>ONE Bank Ltd. (Any Branch)</p>
        <p>Southeast Bank Ltd. (Any Branch)</p>
        <p>Prime Bank Limited (Any Branch)</p>
    </div>
</div>

<p className="text-4xl text-red-700 py-5">Fees for Foreign Students*</p>
<div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5"><li className="list-disc py-2"> Admission Fee (Non-Refundable)    US$ 400</li></p>
    <p className="bg-white p-5"><li className="list-disc py-2"> Semester Fee (IT facility, Library, Student Activities) As for local students fees
</li></p>
    <p className="font-bold bg-slate-200 p-5"><li className="list-disc py-2"> Tuition Fee per credit (For Developed countries)    Double of local students fees</li></p>
    <p className="bg-white p-5"><li className="list-disc py-2"> Tuition Fee per credit (For Developing and SAARC countries)    As for local students fees</li></p>
</div>

<p className="text-4xl text-red-700 py-5">Fees for Visiting Student (Undergraduate)*</p>
<div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5"><li className="list-disc py-2"> Admission Fee (Non-Refundable)    Tk. 15,400</li></p>
    <p className="bg-white p-5"><li className="list-disc py-2"> Semester Fee (IT facility, Library, Student Activities)   Same as local students fees.
</li></p>
    <p className="font-bold bg-slate-200 p-5"><li className="list-disc py-2"> Tuition Fee (Per credit)    Tk. 7,500</li></p>
</div>

<p className="text-4xl text-red-700 py-5">Fees for Visiting Student (Postgraduate)*</p>
<div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5"><li className="list-disc py-2"> Admission Fee (Non-Refundable)    Tk. 13,750</li></p>
    <p className="bg-white p-5"><li className="list-disc py-2"> Semester Fee (IT facility, Library, Student Activities)   Same as local students fees.
</li></p>
    <p className="font-bold bg-slate-200 p-5"><li className="list-disc py-2"> Tuition Fee (Per credit)    Tk. 6,600</li></p>
</div>

<p className="mb-5">*May increase with a notice before a semester</p>

            </div>
        </div>
    );
};

export default TuitionAndFees;