/* eslint-disable react/prop-types */
import { useState } from 'react';

const NewsComponent = ({ news }) => {
  const { img, title, description } = news;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const wordCountLimit = 30; // Adjust this value for your desired word count limit

  const truncatedDescription = description.split(' ').slice(0, wordCountLimit).join(' ');
  const isTruncated = description.split(' ').length > wordCountLimit;

  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[650px]">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src={img} alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">{title}</h2>
          <p className="font-normal text-lg font-nunito">
            {showFullDescription ? description : truncatedDescription}
            {isTruncated && (
              <button className="text-blue-500 underline mx-2" onClick={handleReadMoreClick}>
                {showFullDescription ? 'Read Less' : 'Read More'}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
