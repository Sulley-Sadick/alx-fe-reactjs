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
            <div className='p-4' key={recipe.id}>
                <h1 className='text-4xl my-2 text-center'>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} />
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

