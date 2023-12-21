/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const TertioryNav = () => {
  const navigate  = useNavigate();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      const scrolled = window.scrollY > 250;
      setIsScrolled(scrolled);
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set a scroll threshold (adjust as needed)
      const scrollThreshold = 250;

      // Check if the scroll position is greater than the threshold
      const scrolled = window.scrollY > scrollThreshold;
      setIsSticky(scrolled);
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${isSticky ? 'bg-[#DC143C] p-4 fixed top-0 left-0 w-full z-50' : 'bg-[#DC143C] p-4 z-50'}`}>
    {/* <nav className='navbar navbar-expand-lg navbar-dark bg-red-600 p-4 fixed top-0 left-0 w-full'> */}
      <div className="container mx-auto flex justify-between items-center">
        {isScrolled && (
            <a href='/'>
                <img
                    src="https://canadianuv.netlify.app/Images/CUBWhite.png"
                    alt="Logo"
                    className="mr-3"
                    style={{ height: '40px', width: 'auto' }}
                />
            </a>
            
          )}

        <button
          className="pl-5 lg:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        
        <div className="hidden flex-grow lg:flex lg:justify-around lg:w-full space-x-5">
          <Dropdown title="About Us" link="/about-us" classes_title={`text-xl text-white hover:bg-blue-200 py-2 rounded-md px-5 mx-5`} items={['Vision Mission', 'Leadership And Administration', 'Message from Chairman', 'Message from Vice Chancellor', 'Message from Pro Vice Chancellor', 'Collaboration', 'Awards And Achievements', 'Permanent Campus']} />
          <Dropdown title="Academics" link="/academics" classes_title={`text-xl text-white hover:bg-blue-200 py-2 rounded-md px-5 mx-5`} items={['Schools', 'Departments', 'Centers And Institution', 'Fees And Payments', 'Policies And Procedures', 'Institutional Quality Assurance Cell (IQAC)']} />
          <Dropdown title="Admissions" link="/admissions" classes_title={`text-xl text-white hover:bg-blue-200 py-2 rounded-md px-5 mx-5`} items={['Why Admission at CUB?', 'Undergraduate Admission', 'Postgraduate Admission', 'Scholarship', 'Credit Transfer', 'FAQs']} />
          <Dropdown title="News And Events" link="/news-events" classes_title={`text-xl text-white hover:bg-blue-200 py-2 rounded-md px-5 mx-5`} items={['Announcements', 'News']} />
        </div>

        {isScrolled && (
            <button onClick={()=>navigate('/admissions')} className='btn hover:bg-red-900 bg-red-700 pl-5 text-white'> Apply Now</button>
              
          )}

        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 bottom-0 bg-crimson text-white p-4">
            <div className="flex justify-end">
              <button
                className="text-white"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Render mobile menu items here */}
            <div className="flex flex-col space-y-2 bg-red-500 z-50">
              {/* Mobile menu items */}
              <MobileMenuItem title="About Us" link='/about-us' items={['Vision Mission', 'Leadership And Administration', 'Message from Chairman', 'Message from Vice Chancellor', 'Message from Pro Vice Chancellor', 'Collaboration', 'Awards And Achievements', 'Permanent Campus']} />
              <MobileMenuItem title="Academics" link='/academics' items={['Schools', 'Departments', 'Centers And Institution', 'Fees And Payments', 'Policies And Procedures', 'Institutional Quality Assurance Cell (IQAC)']} />
              <MobileMenuItem title="Admissions" link='/admissions' items={['Why Admission at CUB?', 'Undergraduate Admission', 'Postgraduate Admission', 'Scholarship', 'Credit Transfer', 'FAQs']} />
              <MobileMenuItem title="News And Events" link='/news-events' items={['Announcements', 'News']} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};



const MobileMenuItem = ({ title, items, link}) => {
  return (
    <div className="group relativ">
        <a href={link}>
            <button className={`flex flex-grow-1 text-xl text-white hover:bg-blue-200 py-2 rounded-md px-5 mx-5 z-50`}>
                {title} ▼
            </button>
        </a>

      <div className="absolute hidden bg-white text-black group-hover:block z-50">
        {items.map((item, index) => (
          <a key={index} href={link} className="block px-4 py-2 z-50">
            {item}
          </a>
        ))}
      </div>
    </div>

  );
};

const Dropdown = ({ title, items, classes_title, link }) => {
  return (
    <div className="group relative">
        <a href={link}>
            <button className={`${classes_title}`}>
                {title} ▼
            </button>
        </a>
      <div className="absolute hidden bg-white text-black group-hover:block z-50">
        {items.map((item, index) => (
          <a key={index} href={link} className="block px-4 py-2 hover:bg-blue-200">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TertioryNav;