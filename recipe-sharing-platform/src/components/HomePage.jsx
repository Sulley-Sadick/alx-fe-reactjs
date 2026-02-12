import { useState, useEffect } from "react";
import data from '../data.json'

function HomePage(){
    const [items, setItems] = useState([]);


    useEffect(()=> {
        const fetchData = async function(){
            await new Promise(resolve=> setTimeout(resolve, 500));

            
            setItems(data)            
        }
        
        fetchData()
        
    }, [])
    

        return (items && items.map(item=> {                            
        return <div key={item.id} className="gap-4 mt-4 p-4 sm:grid sm:grid-cols-3">
            <img src={item.image} alt={item.title} className="rounded-md shadow-md  duration-300 hover:skew-x-12 hover:cursor-grab"/>
            <h2 className="text-2xl">Title: {item.title}</h2>
            <p>Summary: {item.summary}</p>
        </div>
        })         
    )
}


export default HomePage;
