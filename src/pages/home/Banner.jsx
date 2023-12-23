import { Carousel } from 'flowbite-react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'

const Banner = () => {
  return (
    <div>

<div className="h-[500px]">
      <Carousel>
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
        <img src={banner4} alt="..." />
        <img src={banner5} alt="..." />
        <img src={banner6} alt="..." />
      </Carousel>
    </div>
      
    </div>
  );
};

export default Banner;