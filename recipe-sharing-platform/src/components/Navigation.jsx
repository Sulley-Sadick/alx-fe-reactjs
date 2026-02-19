import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav>

            <Link to={'/add'} className="p-2 rounded-lg block text-center  my-4 mx-auto text-blue-700 hover:underline">
            Add Recipe
            </Link>

        </nav>
    )


}

export default Navigation;