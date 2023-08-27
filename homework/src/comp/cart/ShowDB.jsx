import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
function ShowDB(){

    const [show, setShow] = useState([])
    async function ShowDB(){
        try{
            const res = await axios.get("http://localhost:5000/showDB")
            setShow(res.data)
        }catch(err){console.log(err)}
        
        
    }
    useEffect(()=>{
        ShowDB()
    },[])
    

    return (
        <>  
            <div className="show">
                
                    {show.map(item => {
                        return(
                            <>
                            <ul className="show__list"> 
                                <li className="show__item" key={nanoid()}>ID -  {item.id} </li>
                                <li className="show__item" key={nanoid()}>FullName -  {item.fullName} </li>
                                <li className="show__item" key={nanoid()}>Email -  {item.email} </li>
                                <li className="show__item" key={nanoid()}>Address - {item.address} </li>
                                <li className="show__item last" key={nanoid()}>Message -  {item.message} </li>
                            </ul>
                            </>
                        )
                    })}
                    
                
            </div>
           
        </>
    )
}

export default ShowDB;