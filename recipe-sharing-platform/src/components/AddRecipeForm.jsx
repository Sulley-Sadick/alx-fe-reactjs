import { useState} from "react";


function AddRecipeForm(){
    
    const [formData, setFormData] = useState({title: '', ingredients: '', preparationSteps: ''})
    const [errors, setErrors] = useState('');

    const validate = formData.title.trim() && formData.ingredients.split('\n').filter(ing=> ing.trim() !== '').length >=2 && formData.preparationSteps.trim();


    const handleChange  = function(e){
        const {name, value} = e.target;
        setFormData(prev=> ({
            ...prev, 
            [name]: value
        }))
    }

    const handleSubmit  = (event)=> {
        // prevent browser default behavior
            event.preventDefault();



        if(!formData.title  || !formData.ingredients  || !formData.preparationSteps){
            setErrors('Please fill out input fields!')
            // setValidate(false)
            return
        }

        const allIngredients = formData.ingredients.split('\n').filter(ing=> ing.trim() !== '');

        if(allIngredients.length < 2){
            setErrors("Ingredients cannot be less than two items.")            
            // setValidate(false)
            return
        }

        setErrors('')        
        // setValidate(true)
        
    }
    

    return (
        <form  onSubmit={handleSubmit} className="flex items-center flex-col gap-2 shadow-md py-4">

            {errors && <p className="text-red-500">{errors}</p>}

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="input"/>

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange}  className="input" ></textarea>

            <label htmlFor="preparation steps">Preparation Steps:</label>
            <textarea id="preparation steps" name="preparationSteps" value={formData.preparationSteps} onChange={handleChange}  className="input"></textarea>

            <button type="submit" className="bg-[#6400ed]  p-2 w-[26%]  flex justify-center items-center rounded-md text-white font-bold" disabled={validate}>Submit</button>
        </form>
    )



}



export default AddRecipeForm;