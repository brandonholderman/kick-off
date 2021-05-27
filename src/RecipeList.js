// import { Link } from "react-router-dom";
// import RecipeDetails from "./RecipeDetails";


const RecipeList = ({ data }) => {

    return (
        // data.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && 
        <div className="recipe-tile">
            <img className="recipe-img" src={data.recipe.image} alt="public/placeholder-300x300.png" />
            <h2 className="recipe-label">{data.recipe.label}</h2>
            {/* <ul className="ingredient-list">
                <li>{data.recipe.ingredientLines + '\n'}</li>
            </ul> */}
        </div>
    );
}
 
export default RecipeList;