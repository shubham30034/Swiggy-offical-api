import React from 'react';
import { Url } from '../../Contants';
import { Carousel } from "@material-tailwind/react";

const CarouselWithCards = ({ data }) => {

  
  return (
    <div
      className='my-11 w-[70%] mx-auto flex justify-center'
     
    >
      {data &&
        data.map((elem, index) => {
          return (
            <div key={index} className=" mx-2 flex justify-center">
              <div className=" bg-orange-100  shadow-md rounded-md p-4 w-64">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{elem.info.header}</h2>
                <p className="text-sm text-gray-600 mb-2">{elem.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{elem.offerTag}</p>
                  <button className="px-3 py-1 bg-yellow-900 text-white text-sm rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Order Now</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CarouselWithCards;
