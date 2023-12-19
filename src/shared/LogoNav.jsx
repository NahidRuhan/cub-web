import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
const LogoNav = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex justify-end'>
                <img onClick={()=>navigate('/')} className='w-56' src={logo} alt="" />
            </div>
        </div>
    );
};

export default LogoNav;