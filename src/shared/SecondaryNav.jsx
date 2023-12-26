import { Link } from "react-router-dom";
import { TbMinusVertical } from "react-icons/tb";


const SecondaryNav = () => {
  return (
    <div className="bg-red-200">
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl hidden lg:flex gap-0 justify-end px- font-roboto font-normal text-lg text-center items-center">
            <Link to='/academic-calender/' className="nav-link"><p className="hover:text-red-500 nav-text">Academic Calendar</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/teaching-research' className="nav-link"><p className="hover:text-red-500 nav-text">Teaching &amp; Research</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/events' className="nav-link"><p className="hover:text-red-500 nav-text">Events</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/library' className="nav-link"><p className="hover:text-red-500 nav-text">Library</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/career' className="nav-link"><p className="hover:text-red-500 nav-text">Career</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/alumni/' className="nav-link"><p className="hover:text-red-500 nav-text">Alumni</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/contact' className="nav-link"><p className="hover:text-red-500 nav-text">Contact</p></Link>
      </div>
    </div>
  );
};

export default SecondaryNav;
