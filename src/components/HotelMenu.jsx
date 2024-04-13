import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Url } from "../Contants";
const HotelMenu = () => {
  const menu = useSelector((store) => store.menu.menu);
  const data = menu?.data?.cards[2]?.card?.card?.info;
  const dispatch = useDispatch();

  const handleItem = () => {
    dispatch(addItem("banana"));
  };

  return (
    <div className=" mx-14 mt-8 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl ml-10 font-bold text-gray-800 mb-4">{data?.name}</h1>
      <div className=" flex justify-between overflow-hidden rounded-lg  ">
      <div className=" mt-4">
        <p className="text-gray-600">Cost for two: ₹{data?.costForTwo}</p>
        <p className="text-gray-600 mt-2">{data?.areaName}, {data?.locality}</p>
        <span>{data?.avgRating}</span>
      <p className="text-sm text-gray-600 mt-2">{data?.cuisines}</p>
      </div>
        <img src={Url + data?.cloudinaryImageId} alt="Image not found" className=" w-[30%]  object-cover rounded-t-lg" />
        <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 rounded-bl-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 0c-4.418 0-8 3.582-8 8 0 7.522 8 12 8 12s8-4.478 8-12c0-4.418-3.582-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-4a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" clipRule="evenodd" />
          </svg>
        
        </div>
      </div>
     
     
    </div>
  );
};

export default HotelMenu;
