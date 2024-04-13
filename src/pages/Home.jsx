import Card from "../components/Card";
import { Url } from "../Contants";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "../components/ShimmerUi";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import useonline from "../utils/useOnline";
import usehotel from "../utils/useHotel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";





const Body = () => {
  const [allhotel,setallhotel] = useState([]);
  const [Filterhotel,setFilterhotel] = useState([]);
  const [searchtext,setsearchtext] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log("all data",Filterhotel);

  useEffect(() =>{
    getHotels();
  },[]);
  
  async function getHotels() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7156702&lng=77.277957&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setallhotel(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterhotel(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log(error);
    }
    
  }
const isonline = useonline();
if(!isonline){
  return <h1>please check ur internet connection offline hogye bhai</h1>
}


const getId = (id)=>{
  console.log("id chaiye yar",id);
  usehotel(id,dispatch)
  navigate("/hotel")
  
}

  // early return
  if(!allhotel) return null;
 
    return (allhotel.length ===0) ?(
     <Shimmer/>
    ) : (
      
      <>
    
   <div className="search-section flex items-center justify-center mt-8">
  <label htmlFor="search-input" className="text-gray-800 mr-2">Please search for dhaba:</label>
  <input
    type="text"
    id="search-input"
    className="border border-gray-300 rounded py-1 px-2 focus:outline-none"
    placeholder="Search..."
    value={searchtext}
    onChange={(e) => setsearchtext(e.target.value)}
  />
  <button
    className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
    onClick={() => {
      const data = filterData(searchtext, allhotel);
      setFilterhotel(data);
    }}
  >
    Search
  </button>
</div>

      <div className="card-sare flex justify-between flex-wrap my-8 mx-56">
      {
    Filterhotel.map((kalu, index) => {
        return (
            <Link to={"/hotel"} key={kalu.info.id}>
              <button onClick={()=>{
                getId(kalu.info.id)
              }}>
                <Card {...kalu.info}  />
                </button>
            </Link>
        );
    })
   }
     </div>
      </>
    );
  };
export default Body  