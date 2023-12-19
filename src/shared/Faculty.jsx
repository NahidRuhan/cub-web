/* eslint-disable react/prop-types */

const Faculty = ({ faculty }) => {
  return (
    <div className="">
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="text-center font-normal text-4xl text-red-500 py-5">Faculty and Research Staff</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {faculty.map((faculty, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-full h-96 rounded-md mb-4"
              />              <h2 className="font-bold text-lg">{faculty.name}</h2>
              <p className="text-sm">{faculty.title}</p>
              <p className="text-sm">{faculty.department}</p>
              <p className="text-sm">{faculty.university}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
