import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";
const Undergrad = () => {
    const responsiveStyles = {
        container: {
          maxWidth: '100%',
          margin: '2%',
        },
        heading: {
          fontSize: '25px',
          color: 'red',
          fontFamily: 'calibri',
        },
        heading50: {
            fontSize: '40px',
            color: 'red',
            fontFamily: 'calibri',
          },
        paragraph: {
          fontSize: '14px',
        },
      };
    return (
        <div>
                                    <SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div style={responsiveStyles.container}>
    <h1 style={responsiveStyles.heading}>The career benefits of our Electrical and Electronic Engineering (EEE)</h1>
    <p style={responsiveStyles.paragraph}>
      The electrical and electronic engineering program at Canadian University of Bangladesh presents students with a myriad
      of career benefits, poised to shape their journey into the professional realm. As students immerse themselves in
      this dynamic field, they gain a solid foundation in core engineering principles, critical problem-solving skills,
      and hands-on experience with cutting-edge technologies. This holistic educational experience allows them to explore
      diverse career pathways, ranging from power systems and telecommunications to embedded systems and signal processing.
      Additionally, structured industry collaborations and internships equip students with real-world exposure, networking
      opportunities, and a practical understanding of industry demands—positioning them as valuable assets in the job
      market. With a growing demand for skilled engineers, graduates often find themselves well-prepared for compelling
      roles in both local and international job markets, with potential career opportunities in diverse sectors such as
      telecommunications, power generation, automation, and beyond. Furthermore, through a blend of theoretical knowledge
      and practical expertise, students are primed to take on the challenges of todays technological landscape, shaping
      them into adaptable professionals ready to navigate the ever-evolving global engineering industry.
    </p>
    <br />
    <h1 style={responsiveStyles.heading}>Career Benefits of Media, Communications and Journalism degree</h1>
    <p style={responsiveStyles.paragraph}>
      Pursuing a Bachelor and Masters of Media Communication and Journalism at the Canadian University of Bangladesh
      offers a unique advantage in terms of a globally informed education. The program integrates international
      perspectives and practices in media, providing you with a broader understanding of the industry beyond local
      contexts.
      {/* ... (rest of the content) ... */}
    </p>
    <br />
    <h1 style={responsiveStyles.heading}>Opportunities After Earning an MBA/EMBA From CUB Business School</h1>
    <p style={responsiveStyles.paragraph}>An MBA/EMBA degree from CUB Business School can lead to a variety of career paths, including: <br />
    Financial Manager/CFO <br />

    Business strategist <br />

    HR Director <br />

    Brand & Marketing Manager <br />

    Accounting Director <br />

    Information Systems Director <br />

    Operations and Supply Chain Director <br />

    Pursue higher Degrees Masters, DBA & PhD. from global universities.</p>
    <br />
    <h1 style={responsiveStyles.heading}>Career Benefits of our Computer Science Engineering (CSE) Degree</h1>
    <p style={responsiveStyles.paragraph}>Our Computer Science Engineering (CSE) degree creates pathways into a successful career in one of the companies of our respective group.  Our Canadian standard degree provides industry-specific knowledge which increases the scope of a strong career path. Our Hands-on lab facilities enhances the learning experience of students.</p>
    <br />
    <h1 style={responsiveStyles.heading}>Career benefits of English graduates</h1>
    <p style={responsiveStyles.paragraph}>The department of English aims to create skilled graduates to fit in the competitive job market. The curriculum of the department has been designed in combination of English Literature, ELT, Applied Linguistics, Cultural Studies and General Education that opens a wide range of job opportunities for the graduates. The practice-based ELT courses prepare the graduates to be trained and skilled English teachers. Career counselling by experts counselors helps the graduates to choose other job fields and get hired by their desired companies. In addition, the graduates get the opportunity to work in different companies owned by the Chairman of Board of Trustees.</p>
    <br />
    <h1 style={responsiveStyles.heading50}>Admission Requirements</h1>
    <div style={{ borderBottom: '3px solid black', width:'auto', borderRadius: '5px', borderColor:'grey' }}></div>
    <br />
    <div style={{ display: 'flex', alignItems: 'center'}}>
    <ul className='list-disc list-inside pd'>
        <li>Undergraduate Admission Eligibility</li>
        <li>Graduate Admission Eligibility</li>
        <li>Required Paper/Documentation</li>
        <li>International Enrollment Pathway</li>
    </ul>
    </div>
    
  </div>
        </div>
    );
};

export default Undergrad;