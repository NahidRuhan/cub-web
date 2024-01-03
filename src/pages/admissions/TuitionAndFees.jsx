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
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 h-52 items-center">

                <h1 className="text-3xl md:text-4xl lg:text-6xl py-3">Tuition Fees and Policy</h1>
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

            <div className="flex flex-col gap-3">
    <p className="text-4xl text-red-700">Fees for  Graduate Students</p>
</div>

                <div style={{ overflowX: 'auto' }}>
  <table style={{ width: 'max-content', tableLayout: 'fixed' }}>
  <tr>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Programs</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Duration (Calender)</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Duration (Semester)</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Credit Hour</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Per Credit Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Tuition Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Registration Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Admission Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Cost</th>

  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>B. Sc. in Computer Science & Engineering (CSE)</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>150</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3300</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4,95,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,65,000</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid', padding: '5px' }}>Bachelor of Business Administration (BBA)</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>126</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3300</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4,15,800</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4,85,800</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>B. Sc. in Electrical & Electronic Engineering (EEE)</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>154</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3300</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,08,200</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,78,200</td>
  </tr>  
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>Bachelor of Science in Shipping & Maritime Science (SMS)</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>150</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3500</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,25,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,95,000</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>BA in Media, Communication and Journalism (MCJ)</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>132</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2600</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3,43,200</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4,13,200</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>BA in English</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>120</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2550</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3,06,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3,76,000</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>LL.B. (Hons.) Bi- Semester</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>8</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>140</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2600</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3,64,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4,30,000</td>
  </tr>       
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>B. Sc. in Computer Science & Engineering (CSE), Diploma Evening*</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>150</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1200</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1,80,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2,50,000</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>B. Sc. in Electrical & Electronic Engineering (EEE), Diploma Evening</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4 years</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>12</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>154</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1200</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1,84,800</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 12 = 60,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2,54,800</td>
  </tr>  
  </table>
</div>

<div className="flex flex-col gap-3">
    <p className="text-4xl text-red-700">Fees for Post Graduate Students</p>
</div>

                <div style={{ overflowX: 'auto' }}>
  <table style={{ width: 'max-content', tableLayout: 'fixed' }}>
  <tr>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Programs</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Duration (Calender)</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Duration (Semester)</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Credit Hour</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Per Credit Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Tuition Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Registration Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Admission Fee</th>
    <th style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>Total Cost</th>

  </tr>
  <tr>
    <td style={{ border: '1px solid', padding: '5px' }}>Master of Business Administration (MBA)</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1 year 8 months</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>60</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>3000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1,80,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 5 = 25,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2,15,000</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid', padding: '5px' }}>Executive Master of Business Administration (EMBA)</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1 year 4 months</td>
  <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>48</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2500</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1,20,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 4 = 20,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1,50,000</td>
  </tr>  
  <tr>
    <td style={{ border: '1px solid', padding: '5px' }}>Master in Maritime Transportation and Logistics (MTL)</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>1 year 8 months</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>60</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>4200</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2,52,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>5,000 x 5 = 25,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>10,000</td>
    <td style={{ border: '1px solid', padding: '5px', textAlign: 'center' }}>2,87,000</td>
  </tr>
  </table>
</div>
            </div>
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl flex flex-col gap-5">

<div className="flex flex-col gap-3">
    <p className="text-4xl text-red-700">Admission Eligibility</p>
</div>

<div className="shadow-2xl">

    <p className="font-bold bg-slate-200 p-5"> Undergraduate Program</p>
    <div className="bg-white p-5">
    <p><li className="list-disc py-2"> Minimum GPA 2.50 each at SSC and HSC/Diploma (If GPA is below 2.50 then minimum GPA 2.00 and total GPA 6.00 is required)</li></p>
    <p><li className="list-disc py-2"> O level in 5 subjects and A level in 2 major subjects with minimum B Grade or GPA 4.00 in four subjects and C Grade or GPA 3.50 in three subjects</li></p>
    <p><li className="list-disc py-2"> For EEE/CSE programs, students must have had Physics and Mathematics in HSC/A-Level or equivalent level with fulfilling the above
criteria.</li></p>        
    </div>

    <p className="font-bold bg-slate-200 p-5">Graduate Program</p>
    <div className="bg-white p-5">
    <p><li className="list-disc py-2"> The candidates applying for Master programs must have minimum GPA 2.00 or equivalent results at the Bachelor level and must fulfill the admission requirement for Bachelor program as per UGC Policy.</li></p>
    <p><li className="list-disc py-2"> Second division or GPA 2.00 in Bachelor Level</li></p>
    <p><li className="list-disc py-2"> Minimum two years of experience with Bachelor degree for Executive MBA admission</li></p>
    </div>

    <p className="font-bold bg-slate-200 p-5">Document Required for Admission</p>
    <div className="bg-white p-5">
    <p><li className="list-disc py-2"> Photocopy of all academic certificates and mark sheets</li></p>
    <p><li className="list-disc py-2"> Three copies of passport size color photographs</li></p>
    <p><li className="list-disc py-2"> Photocopy of student&apos;s and parent&apos;s NID card</li></p>
    <p><li className="list-disc py-2"> Job Experience certificate for EMBA</li></p>
    </div>
    
</div>


            </div>
        </div>
    );
};

export default TuitionAndFees;