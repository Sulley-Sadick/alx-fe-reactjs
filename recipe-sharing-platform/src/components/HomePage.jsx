import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import data from '../data.json'

function HomePage(){
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        const fetchData = async function(){
            await new Promise(resolve=> setTimeout(resolve, 500));

            setRecipes(data)            
        }
        
        fetchData()
        
    }, [])
    

        return (
            <div className="gap-4 mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {recipes.map(recipe=> (
                <div key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}><img src={recipe.image} alt={recipe.title} className="rounded-md shadow-lg  duration-300 hover:skew-x-12 hover:cursor-pointer w-full  min-h-full mt-2" /></Link>
                <h2 className="text-2xl">{recipe.title}</h2>
                <p>{recipe.summary}</p>
                </div>
            ))}
            </div>
    )
}


export default HomePage;
