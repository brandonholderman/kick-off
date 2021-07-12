import { useState } from "react";
import RecipeDetails from "./RecipeDetails";


const RecipeList = ({ data }) => {

    const [show, setShow] = useState(false);
    const [recipeData, setRecipeData] = useState({});

    return (
        // data.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && 
        <div className="recipe-tile">
            <img className="recipe-img" src={ data.recipe.image } alt="%PUBLIC_URL%/placeholder.gif" />
            <h2 className="recipe-label">{ data.recipe.label }</h2>
            <div>
                <button className="details-button" onClick={ () => {setShow(true); setRecipeData(data)}}>Recipe Details</button>
                <RecipeDetails onClose={ () => setShow(false) } show={ show } data={ recipeData } />
            </div>
        </div>
    );
}
 
export default RecipeList;