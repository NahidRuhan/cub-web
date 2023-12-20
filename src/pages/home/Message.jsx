import chairman from '../../assets/Chariman_2.jpg'

const Message = () => {
    return (
        <div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">  

    <div className='lg:w-max'>
        <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">Message From The Chairman</h1>
        <hr className='w-auto h-1  bg-[#F4253F]' />
    </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
                    <p className="font-nunito font-black text-base uppercase">TO ALL MY DEAR STUDENTS- WORK HARD. THERE IS NO SHORTCUT TO SUCCESS.</p>
                    <div className='flex flex-col text-center items-center'>
                        <img src={chairman} alt="" />
                        <span className='p-2 bg-white text-black'>Dr. Chowdhury Nafeez Sarafat</span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Message;