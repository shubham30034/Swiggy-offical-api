import { useState,useEffect } from "react"


const useonline = ()=>{
    const[isonline,setisonline]= useState(true);

    const onlinewala = ()=>{
        setisonline(true);
    }

    const offlinewala = ()=>{
        setisonline(false);
    }


useEffect(()=>{
    window.addEventListener("online",onlinewala)
    window.addEventListener("offline",offlinewala)

    return()=>{
        window.removeEventListener("online",onlinewala)
        window.removeEventListener("offline",offlinewala)
    }
},[]);

return isonline
}

export default useonline