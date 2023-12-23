import { Carousel } from 'flowbite-react';
import banner1 from '../../assets/campus1.jpg'
import banner2 from '../../assets/campus2.jpg'
import banner3 from '../../assets/campus3.jpg'

const Campus = () => {

    return (
      
        <div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">  

                <div className='lg:w-max'>
                <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">Parmanent Campus</h1>
        <hr className='w-auto h-1  bg-[#F4253F]' />
    </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-roboto font-normal text-3xl text-[#F4253F]">Home away from home...</h1>
                        <p className="font-normal text-base font-nunito">A state of the art campus which hosts classrooms with smart technologies.A home away from home, with multipurpose facilities such as canteens, libraries and recreation centers. A student life that provides a balance between education and recreation.</p>
                        <div className="text-center lg:text-left">
                            <button className="btn btn-error text-white">Know More</button>
                        </div>
                    </div>

                    <div className="h h-52">
      <Carousel>
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
      </Carousel>
    </div>


                </div>

            </div>
                    
        </div>
    );
};

export default Campus;