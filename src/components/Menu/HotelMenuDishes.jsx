import React from 'react';
import { Url } from '../../Contants';

const HotelMenuDishes = ({ data }) => {
    console.log("dishes", data);

    if (!data) return null;

    return (
        <div>
            <div className='flex justify-between gap-5 flex-wrap'>
                {data.map((elem) => {
                    return (
                        <div className='flex justify-between w-[70%] mx-auto shadow-lg p-4 rounded' key={elem.dish.id}>
                            <div className='w-[60%]'>
                                <h1 className="text-lg font-semibold">{elem.dish.info.name}</h1>
                                
                                <div className="mt-2">
                                    <p className="text-sm text-gray-600 font-medium">Category:</p>
                                    <p className="text-base text-gray-700">{elem.dish.info.category}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-600 font-medium">Price:</p>
                                    <p className="text-base text-black font-bold">${elem.dish.info.price}</p>
                                </div>
                            </div>
                            <div className=" relative">
                                <img className='w-40' src={Url + elem.dish.info.imageId} alt="" />
                                <button className="bg-blue-500 w-28 relative left-0 z-50  bottom-10 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded ml-4">
                                    Add
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default HotelMenuDishes;
