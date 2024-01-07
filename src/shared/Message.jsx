import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Message = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const animationRef = useRef(null);
    const [ref, inView] = useInView({
      threshold: 0.5, // Adjust the threshold as needed
    });
  
    useEffect(() => {
      if (inView && !animationTriggered) {
        setIsVisible(true);
        setAnimationTriggered(true);
      }
    }, [inView, animationTriggered]);
    return (
        <div ref={ref}>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
<div className="lg:w-1/2 relative flex md:flex-col flex-col-reverse">
            {isVisible && (
              <TypeAnimation
                ref={animationRef}
                className="text-xl font-bold h-28 md:h-24 text-center md:text-left"
                style={{ whiteSpace: 'pre-line', display: 'block' }}
                sequence={[
                  `Dr. Chowdhury Nafeez Sarafat\nFounder & Chairman\nCanadian University of Bangladesh`,
                  1000,
                  '',
                ]}
                repeat={Infinity}
              />
            )}
            <img
              className="w-full lg:w-3/5 rounded-lg"
              src="https://canadianuv.netlify.app/Images/Chariman_2.jpg"
              alt="Chairman"
            />
          </div>
    <div className="lg:w-1/2">
        <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold text-logoRed">&quot;To all my dear students - Work hard. There is no shortcut to success.&quot;</h1>
            <p>Welcome to the Canadian University of Bangladesh! Established in 2016 under the Private Universities Act of 2010, our university holds approval from the Ministry of Education, Government of Bangladesh, and the University Grants Commission (UGC).</p>
            <p>We take pride in our swift progress and continuous academic growth, dedicated to offering quality education. Our vision is to stand out internationally in our chosen fields by embracing Canadian perspectives in learning, research, and application, rooted in respect for diverse cultures and Bangladeshi values. Through collaboration and cooperation, we aim to realize our vision and fulfill our mission through education, research, entrepreneurship, and community service.</p>
            <p>Our campus boasts excellent infrastructure and facilities conducive to your learning journey. Moreover, we provide various opportunities for engaging in extracurricular activities, fostering the development of leadership qualities.</p>
            <p>Wishing you success in your educational endeavors and future career pursuits.</p>
        </div>            
    </div>
</div>
</div>
            
        </div>
    );
};

export default Message;