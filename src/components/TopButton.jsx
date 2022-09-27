import React from "react";

const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "Nairobi",
    },
    {
      id: 2,
      title: "london",
    },
    {
      id: 3,
      title: "Paris",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Berlin",
    },
  ];
  return (
    <div className=" flex items-center justify-around my-6">
      {cities.map((city,id) => (
        
          <button key={id} className=" text-white font-medium text-lg">  {city.title} </button>
        
        
        
       
      ))}
    </div>
  );
};

export default TopButton;
