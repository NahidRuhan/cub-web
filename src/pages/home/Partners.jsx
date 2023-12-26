import Slider from "react-slick";

const Partners = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false, // Hide arrows on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };
    return (
<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">  

<div className=''>
<h1 className="font-roboto font-normal text-center text-4xl text-[#F4253F]">Partnership and Collaboration</h1>
</div>
        <Slider {...settings}>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Bangladesh%20society%20for%20human%20resource%20management.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Binary%20University.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/British%20Council.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Centennial%20College.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Digicon%20Technologies%20Limited.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Feelgood%20Coaching%20and%20Consulting%20E.U.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Guangzhou%20MalishaEdu%20Co.%20Ltd.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Insurance%20Institute%20of%20India.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/International%20Maritime%20Academy.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Management%20Development%20Institute%20of%20Singapore%20(MDIS).jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Mas%20Marine%20Academy,Anowara,%20Chottogram.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/North%20South%20University.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Padma%20Bank.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Pune%20Institute%20of%20business%20management.jpg" alt="" />
          </div>
          <div>
            <img src="https://cub.edu.bd/assets/images/universitypartners/Universiti%20Teknologi%20petronas.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Partners;