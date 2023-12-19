import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>

<div className="banner">
<Slider {...settings}>
    <div><img className="h-96 w-full" src="https://i.ibb.co/1TDpLS1/quebec.jpg" alt="" /></div>
    <div><img className="h-96 w-full" src="https://i.ibb.co/cY1PTNw/service-background.jpg" alt="" /></div>
    <div><img className="h-96 w-full" src="https://i.ibb.co/GHbyMQX/alberta.jpg" alt="" /></div></Slider>
  </div>

        </div>
    );
};

export default Banner;