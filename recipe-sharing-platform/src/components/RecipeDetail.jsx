import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json'


function RecipeDetails (){

    const {id} = useParams();

    const [recipe, setRecipe] = useState('')

    useEffect(()=> {
        const fetchData = async function(){
            await new Promise(resolve=> setTimeout(resolve, 500));

            setRecipe(data.find(item=> item.id === +id))            
        }
        
        fetchData()
        
    }, [id])
    
        
        if(!recipe)return <p>Recipe not found</p>

    return (
            <div className='p-4 font-mono' key={recipe.id}>
                <h1 className='text-4xl my-2 text-center'>{recipe.title}</h1>
                <img className='min-h-[10rem] max-w-[50rem] mx-auto shadow-[5px_3px_5px_rgba(0,0,0,0.7)] my-6' src={recipe.image} alt={recipe.title} />
                <p>{recipe.summary}</p>
                <ul>
                    {recipe.ingredients.map((ing, index)=> (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
                <p>{recipe.instructions}</p>   
            </div>
        )
    

}

export default RecipeDetails;

