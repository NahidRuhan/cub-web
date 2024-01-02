import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-logoRed text-white p-5">
        
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
            <div className="flex justify-center  w-1/6 h-auto mx-auto">
                <img className="" src="https://canadianuv.netlify.app/Images/CUBWhite.png" alt="" />

            </div>

<footer className="footer p-10">
  <nav>
    <header className="footer-title text-yellow-100">About</header> 
    <a className="link link-hover">Mission</a>
    <a className="link link-hover">Leadership and administration</a>
    <a className="link link-hover">Career</a>
    <a className="link link-hover">Permanent Campus</a>
  </nav> 
  <nav>
    <header className="footer-title text-yellow-100">Academics</header> 
    <a className="link link-hover">Schools</a>
    <a className="link link-hover">Department</a>
    <a className="link link-hover">Centers and Institute</a>
    <a className="link link-hover">Office and Registration</a>
    <a className="link link-hover">Fees and Payment</a>
    <a className="link link-hover">Policies and Procedures</a>
    <a className="link link-hover">Institutional Quality <br></br>Assurance Cell (IQAC)</a>
    <a className="link link-hover">Teaching and Research</a>
  </nav> 
  <nav>
    <header className="footer-title text-yellow-100">Campus Life</header> 
    <a className="link link-hover">Club</a>
    <a className="link link-hover">Library</a>
    <a className="link link-hover">Campus</a>
  </nav> 
  <nav>
    <header className="footer-title text-yellow-100">Important Links</header> 
    <a className="link link-hover">UGC, Bangladesh</a>
    <a className="link link-hover">Ministry of Education, Bangladesh</a>
  </nav> 
</footer>
<footer className="p-10 flex flex-col gap-3">
      <nav className="flex justify-center items-center gap-5 text-4xl text-white"> {/* Use 'items-center' to center vertically */}
        <p><FaFacebookSquare /></p>
        <p><FaTwitterSquare /></p>
        <p><FaYoutubeSquare /></p>
        <p><FaLinkedin /></p>
        <p><FaInstagramSquare /></p>
      </nav>
      <p className="font-normal text-xl text-center">Canadian University Of Bangladesh | Rangs RL Square Pragati Sharani (Bir uttam Rafiqul Islam Avenue), Dhaka-1212, Bangladesh.</p>
</footer>

            
        </div>
        <footer className="footer footer-center p-4 bg-logoRed text-white">
  <aside>
    <p>© 2023 Canadian University Of Bangladesh. All rights reserved. |</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;