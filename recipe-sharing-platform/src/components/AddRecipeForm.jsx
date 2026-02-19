import { useState} from "react";


function AddRecipeForm(){
    
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState('');
    const [preparationSteps, setPreparationSteps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit  = (event)=> {
        // prevent browser default behavior
        event.preventDefault();

        if(!title  || !ingredients  || !preparationSteps){
            setError('Please fill out input fields!')
            return
        }

        const allIngredients = ingredients.split('\n').filter(ing=> ing.trim() !== '');

        if(allIngredients.length < 2){
            setError("Ingredients cannot be less than two items.")            
            return
        }


        setError('')        
        
    }
    

    return (
        <form  onSubmit={handleSubmit} className="flex items-center flex-col gap-2">

            {error && <p className="text-red-500">{error}</p>}

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(e)=> setTitle(e.target.value)} className="input"/>

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients"onChange={(e)=> setIngredients(e.target.value)}  className="input"></textarea>

            <label htmlFor="preparation steps">Preparation Steps:</label>
            <textarea id="preparation steps" onChange={(e)=> setPreparationSteps(e.target.value)}  className="input"></textarea>

            <button type="submit" className="bg-[#6400ed]  p-2 w-[26%]  flex justify-center items-center rounded-md text-white font-bold ">Submit</button>
        </form>
    )



}



export default AddRecipeForm;