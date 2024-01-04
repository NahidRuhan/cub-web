/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const LibraryNav = () => {
  const navigate = useNavigate();
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
   <nav className={`${isSticky ? 'bg-logoRed p-1 fixed top-0 left-0 w-full z-50' : 'bg-logoRed p-1 z-50'}`}>
   {/* <nav className='navbar navbar-expand-lg navbar-dark bg-red-600 p-1 fixed top-0 left-0 w-full'> */}
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
         <Dropdown title="Home" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
         <Dropdown title="About" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[{ name:'Welcome', link:''}, { name:'Mission', link:'/'}, { name:'Vision', link:''}, { name:'Library User Policy', link:'' }]} />
         <Dropdown title="Resources" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
         <Dropdown title="Contact" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
       </div>

        {isScrolled && (
            <button onClick={()=>navigate('/admissions')} className='btn hover:bg-green-900 hover:text-white bg-white text-black pl-5 '> Apply Now</button>
              
          )}

        {mobileMenuOpen && (
          <div id="drawer-navigation" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-logoRed">
          <button className="text-white text-2xl hover:text-gray-300" onClick={toggleMobileMenu}>
            X
          </button>
          <button
            type="button"
            onClick={toggleMobileMenu}
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">

         <MobileMenuItem has_children={true} title="Home" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
         <MobileMenuItem has_children={true} title="About" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[{ name:'Welcome', link:''}, { name:'Mission', link:'/'}, { name:'Vision', link:''}, { name:'Library User Policy', link:'' }]} />
         <MobileMenuItem has_children={true} title="Resources" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
         <MobileMenuItem has_children={true} title="Contact" link="" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
            </ul>
         </div>
    </div>
        )}
      
      </div>
    </nav>
  );
};



const MobileMenuItem = ({ title, items, link, has_children}) => {
  return (
    <div className="group relative">
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <a href={link}>
         <button className={` text-white hover:bg-blue-200 rounded-md z-45`} style={{ display: 'flex', flexDirection: 'row' }}>
            {title}
          </button>
         </a>
         {has_children && (
          <button className={`text-xl text-white hover:bg-blue-200 py-2 rounded-md px-5 mx-5 z-50`}>
            +
          </button>)}
        </div>
        
        <div className="absolute hidden group-hover:bg-[#F5F5F5] group-hover:rounded text-black group-hover:block z-50">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="block px-4 py-2  hover:text-logoRed">
            {item.name}
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
              {/* {title} ▼ */}
              {title}
          </button>
        </a>
        <div className="absolute hidden group-hover:bg-[#F5F5F5] group-hover:rounded text-black group-hover:block z-50">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="block px-4 py-2  hover:text-logoRed">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LibraryNav;