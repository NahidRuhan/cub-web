import { Link } from "react-router-dom";
import { TbMinusVertical } from "react-icons/tb";
import { useState } from "react";


const SecondaryNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <div className="bg-red-200">
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl hidden lg:flex gap-0 justify-end font-roboto font-normal text-center items-center text-lg">
            <Link to='/academic-calender' className="nav-link"><p className="hover:text-red-500 nav-text">Academic Calendar</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/teaching-research' className="nav-link"><p className="hover:text-red-500 nav-text">Teaching &amp; Research</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            {/* to='/conference' */}
            <div          
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <Link className="nav-link" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
          <p className="hover:text-red-500 nav-text">CUB Cares</p>
          {showDropdown && (
            <div className="absolute bg-white p-2 mt-28 ml-0 w-32 rounded shadow-lg">
              <Link><p className="text-black text-base hover:text-logoRed">SSW</p></Link>
              <Link><p className="text-black text-base hover:text-logoRed">DSW</p></Link>
              <Link><p className="text-black text-base hover:text-logoRed">Proctors Office</p></Link>
            </div>
          )}
        </Link>              
            </div>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/library' className="nav-link"><p className="hover:text-red-500 nav-text">Library</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/alumni' className="nav-link"><p className="hover:text-red-500 nav-text">Alumni</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/career' className="nav-link"><p className="hover:text-red-500 nav-text">Career</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/contact' className="nav-link"><p className="hover:text-red-500 nav-text">Contact</p></Link>
      </div>
    </div>
  );
};

export default SecondaryNav;
