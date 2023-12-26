import LogoNav from "../../shared/LogoNav";
import SecondaryNav from "../../shared/SecondaryNav";
import TertioryNav from "../../shared/TertioryNav";

const ProVc = () => {
    return (
        <div>

<SecondaryNav></SecondaryNav>
            <LogoNav></LogoNav>
            <TertioryNav></TertioryNav>

            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-5">
                <h1 className="text-lg font-bold">Dear Students and respected Guardians,</h1>
                <p>I am delighted to extend a warm welcome to you on behalf of the Canadian University of Bangladesh (CUB) where educational excellence ensures higher quality, meets innovation, and opportunities for a bright future at home and abroad.
As the Vice-Chancellor (In-charge) and Pro Vice Chancellor of the CUB, I take immense pride in introducing you to a university that stands out for its commitment to providing unparalleled quality higher education. Here at CUB, we are dedicated to nurturing minds, fostering creativity, and preparing our students for success in a dynamic global landscape.</p>
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div><img src="https://canadianuv.netlify.app/Images/ProVC.png" alt="" /></div>
                    <div>
                        <p>Our faculty members, renowned in their respective fields, are committed to imparting knowledge that goes beyond textbooks. They are mentors and guides, shaping academic success and instilling a passion for continuous learning. Our learning environment is equipped with cutting-edge facilities that foster innovation and research. From modern classrooms to advanced laboratories, we ensure that our students have access to the resources necessary for their academic journey.</p>
                        <p>At CUB, we understand the importance of flexibility in education. Our credit transfer facilities provide you with the opportunity to explore diverse academic avenues, broadening your horizons and enriching your learning experience. Your success is our priority. We have established strong connections with industry leaders, facilitating job placement opportunities for our graduates. We are dedicated to empowering you with the skills and knowledge that employers seek.</p>
                    </div>
                </div>
                <p>We encourage a culture of innovation and entrepreneurship. Our curriculum is designed to instill critical thinking and problem-solving skills, preparing you not just for a job but for a successful and impactful career.</p>
                <p>Choosing the right university is a significant decision, and at CUB, we aim to make that decision easier for you. We invite you to embark on a transformative educational journey with us, where each day is an opportunity to learn, grow, and excel.</p>
                <p>As you stand on this crucial decision of selecting the right university, consider CUB as your partner in academic and personal growth. Join us in celebrating a decade of achievements and becoming a part of a community that values knowledge, innovation, and excellence.</p>
                <p>Seize the opportunity to be a part of the Canadian University of Bangladesh, where your journey towards success begins.</p>

                <div className="text-[#f4353f]">
                    <p>Best Regards,</p>
                    <p>Professor Dr Gias U Ahsan, PhD</p>
                    <p>Vice Chancellor (IC) and</p>
                    <p>Pro Vice-Chancellor</p>
                    <p>Canadian University of Bangladesh</p>
                </div>
            </div>
            
        </div>
    );
};

export default ProVc;