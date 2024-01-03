/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const TertioryNav = () => {
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
         <Dropdown title="About Us" link="/about-us/vision-mission" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[{ name:'Vision Mission', link:'/about-us/vision-mission'}, { name:'Leadership And Administration', link:'/about-us/leadership-administration'}, { name:'Message from Chairman', link:'/about-us/chairman-message'}, { name:'Message from Vice Chancellor', link:'/about-us/vc-message'}, { name:'Message from Pro Vice Chancellor', link:'/about-us/provc-message'}, { name:'Collaboration', link:'/about-us/collaboration'}, { name:'Awards And Achievements', link:'/about-us/awards-achievements'}, { name:'Permanent Campus', link:'/about-us/permanent-campus'}]} />
         <Dropdown title="Academics" link="/academics/schools" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[{ name:'Schools', link:'/academics/schools'}, { name:'Departments', link:'/academics/departments'}, { name:'Centers And Institution', link:'/academics/center-institutions'}]} />
         <Dropdown title="Admissions" link="/admissions" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[{ name:'Why Admission at CUB?', link:'/admissions/why'}, { name:'Scholarship', link:'/admissions/scholarship'},{ name:'Tuition Fees and Policy', link:"/admissions/tuition-fees"}]} />
         <Dropdown title="News And Events" link="/news-events" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
         <Dropdown title="Announcements" link="/announcements" classes_title={`text-lg text-white hover:bg-white hover:text-logoRed hover:underline py-2 rounded-md px-1 mx-2`} items={[]} />
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
               <MobileMenuItem has_children={true} title="About Us" link="/about-us/vision-mission" classes_title={`text-lg text-white hover:bg-blue-200 py-2 rounded-md px-1 mx-2`} items={[{ name:'Vision Mission', link:'/about-us/vision-mission'}, { name:'Leadership And Administration', link:'/about-us/leadership-administration'}, { name:'Message from Chairman', link:'/about-us/chairman-message'}, { name:'Message from Vice Chancellor', link:'/about-us/vc-message'}, { name:'Message from Pro Vice Chancellor', link:'/about-us/provc-message'}, { name:'Collaboration', link:'/about-us/collaboration'}, { name:'Awards And Achievements', link:'/about-us/awards-achievements'}, { name:'Permanent Campus', link:'/about-us/permanent-campus'}]} />
               <MobileMenuItem has_children={true} title="Academics" link="/academics/schools" classes_title={`text-lg text-white hover:bg-blue-200 py-2 rounded-md px-1 mx-2`} items={[{ name:'Schools', link:'/academics/schools'}, { name:'Departments', link:'/academics/departments'}, { name:'Centers And Institution', link:'/academics/center-institutions'}, { name:'Fees And Payment', link:'/academics/fees-payment'}]} />
               <MobileMenuItem has_children={true} title="Admissions" link="/admissions" classes_title={`text-lg text-white hover:bg-blue-200 py-2 rounded-md px-1 mx-2`} items={[{ name:'Why Admission at CUB?', link:'/admissions/why'},  { name:'Scholarship', link:'/admissions/scholarship'},{ name:'Tuition Fees and Policy', link:"/admissions/tuition-fees"}]} />
               <MobileMenuItem has_children={false} title="News And Events" link="/news-events" classes_title={`text-lg text-white hover:bg-blue-200 py-2 rounded-md px-1 mx-2`} items={[]} />
               <MobileMenuItem has_children={false} title="Announcements" link="/announcements" classes_title={`text-lg text-white hover:bg-blue-200 py-2 rounded-md px-1 mx-2`} items={[]} />
            </ul>
         </div>
    </div>
        )}
        {/* <div id="drawer-navigation" class="lg:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
              <button className={`justify-center text-center text left-0 text-2xl`} onClick={toggleMobileMenu}>X</button>
              <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                
             </button>
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                         </svg>
                         <span class="ms-3">Dashboard</span>
                      </a>
                   </li>
                   <li>
                      <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                               <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                            </svg>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                      </button>
                      <ul id="dropdown-example" class="hidden py-2 space-y-2">
                            <li>
                               <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                            </li>
                            <li>
                               <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                            </li>
                            <li>
                               <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                            </li>
                      </ul>
                   </li>
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                         </svg>
                         <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                         <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                      </a>
                   </li>
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                         </svg>
                         <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                         <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                      </a>
                   </li>
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                         </svg>
                         <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                      </a>
                   </li>
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                         </svg>
                         <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                      </a>
                   </li>
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                         </svg>
                         <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                      </a>
                   </li>
                   <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                         </svg>
                         <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                      </a>
                   </li>
                </ul>
             </div>
        </div> */}
      
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

export default TertioryNav;