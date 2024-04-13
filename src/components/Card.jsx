import { Url } from "../Contants";

const Card = ({ name, cuisines, cloudinaryImageId, id, costForTwo, avgRating }) => {
  return (
    <div className="w-64 rounded-lg overflow-hidden shadow-md bg-white">
      <img className="w-full h-40 object-cover" src={Url + cloudinaryImageId} alt="Image not found" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0c-4.418 0-8 3.582-8 8 0 7.522 8 12 8 12s8-4.478 8-12c0-4.418-3.582-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-4a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700">{avgRating}</p>
          </div>
          <p className="text-gray-700">₹{costForTwo} for two</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
