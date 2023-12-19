
const Campus = () => {

    const handleButtonClick = (event, target) => {
        event.preventDefault(); // Prevents the default behavior of the anchor link
        // Your logic here, e.g., handle slide transition or other actions
        // For example, you might want to update the active slide based on the button clicked
        console.log(`Button clicked for slide ${target}`);
      };

    return (
      
        <div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">  

                <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">Parmanent Campus</h1>

                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-roboto font-normal text-3xl text-[#F4253F]">Home away from home...</h1>
                        <p className="font-normal text-base font-nunito">A state of the art campus which hosts classrooms with smart technologies.A home away from home, with multipurpose facilities such as canteens, libraries and recreation centers. A student life that provides a balance between education and recreation.</p>
                        <div className="text-center lg:text-left">
                            <button className="btn btn-error text-white">Know More</button>
                        </div>
                    </div>

                    <div className="carousel w-full">
                        
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide4')}>❮</a> 
          <a href="#slide2" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide2')}>❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide1')}>❮</a> 
          <a href="#slide3" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide3')}>❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

      <a href="#slide2" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide2')}>❮</a> 
          <a href="#slide4" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide4')}>❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">


      <a href="#slide3" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide3')}>❮</a> 
          <a href="#slide1" className="btn btn-circle" onClick={(e) => handleButtonClick(e, 'slide1')}>❯</a>
    </div>
  </div>
</div>


                </div>

            </div>
                    
        </div>
    );
};

export default Campus;