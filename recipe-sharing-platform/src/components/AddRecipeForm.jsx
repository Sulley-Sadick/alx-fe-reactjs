import { useState} from "react";


function AddRecipeForm(){
    
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState('');
    const [preparationSteps, setPreparationSteps] = useState('');
    const [errors, setErrors] = useState('');
    const [validate, setValidate] = useState(false);

    const handleSubmit  = (event)=> {
        // prevent browser default behavior
        event.preventDefault();

        if(!title  || !ingredients  || !preparationSteps){
            setErrors('Please fill out input fields!')
            setValidate(false)
            return
        }

        const allIngredients = ingredients.split('\n').filter(ing=> ing.trim() !== '');

        if(allIngredients.length < 2){
            setErrors("Ingredients cannot be less than two items.")            
            setValidate(false)
            return
        }

        setErrors('')        
        setValidate(true)
        
    }
    

    return (
        <form  onSubmit={handleSubmit} className="flex items-center flex-col gap-2 shadow-md py-4">

            {errors && <p className="text-red-500">{errors}</p>}

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(e)=> setTitle(e.target.value)} className="input"/>

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients"onChange={(e)=> setIngredients(e.target.value)}  className="input" ></textarea>

            <label htmlFor="preparation steps">Preparation Steps:</label>
            <textarea id="preparation steps" onChange={(e)=> setPreparationSteps(e.target.value)}  className="input"></textarea>

            <button type="submit" className="bg-[#6400ed]  p-2 w-[26%]  flex justify-center items-center rounded-md text-white font-bold" disabled={!validate}>Submit</button>
        </form>
    )



}



export default AddRecipeForm;