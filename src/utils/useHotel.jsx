import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resMenu } from "./menuSlice";

const usehotel = async(id,dispatch) => {


  console.log(id,"id");
  
  const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6616666&lng=77.36797299999999&restaurantId=${id}&catalog_qa=undefined&submitAction=${id}`);
  const json = await data.json();
  console.log(json,"ye hiona chaiyhe");
  dispatch(resMenu(json))
 



};

export default usehotel;
