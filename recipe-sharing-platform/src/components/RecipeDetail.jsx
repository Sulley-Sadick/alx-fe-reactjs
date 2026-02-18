import { useParams } from 'react-router-dom';
import data from '../data.json'


function RecipeDetails (){

    const {id} = useParams();

    // converted the id into a number using the (+) operator instead of parseInt
    const recipe = data.find(item=> item.id === +id)

    if(!recipe)return <p>Recipe not found</p>

    return (
            <div className='flex flex-col items-center' key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <h2>{recipe.title}</h2>
                <p>{recipe.summary}</p>
            </div>
        )
    

}

export default RecipeDetails;

