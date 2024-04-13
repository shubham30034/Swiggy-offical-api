import { addItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Url } from "../../Contants";
import UpparMenu from "./UpparMenu";
import HotelMenuCrousel from "./HotelMenuCrousel";
import Dishes from "./Dishes";




const HotelMenu = () => {
  const menu = useSelector((store) => store.menu.menu);

    console.log("menu",menu);

  const data = menu?.data?.cards[2]?.card?.card?.info;
  const dispatch = useDispatch();

  const card3 = menu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers


  

  return (
    <>
         
     <UpparMenu data={data}/>
     <HotelMenuCrousel data={card3}/>
  
    </>
  );
};

export default HotelMenu;
