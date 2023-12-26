import { Carousel } from 'flowbite-react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const Banner = () => {
  return (
    <div>

<div className="h-52 md:h-96 lg:h-[500px]">
      <Carousel>
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />

      </Carousel>
    </div>
      
    </div>
  );
};

export default Banner;