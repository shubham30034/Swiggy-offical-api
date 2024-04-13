import { addItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Url } from "../../Contants";
import UpparMenu from "./UpparMenu";
import HotelMenuCrousel from "./HotelMenuCrousel";
import Dishes from "./Dishes";
import HotelMenuDishes from "./HotelMenuDishes";



const HotelMenu = () => {
  const menu = useSelector((store) => store.menu.menu);


  const data = menu?.data?.cards[2]?.card?.card?.info;
  const dispatch = useDispatch();

  const card3 = menu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
  const card4 = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel
 

 

  

  return (
    <>
         
     <UpparMenu data={data}/>
     <HotelMenuCrousel data={card3}/>
     <HotelMenuDishes data={card4}/>
  
    </>
  );
};

export default HotelMenu;
