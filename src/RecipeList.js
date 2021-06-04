import { Link } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";


const RecipeList = ({ data }) => {

    const handleDetails = () => {
        return <iframe src={data.recipe.url} title={data.recipe.label} />;
    }

    return (
        // data.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && 
        <div className="recipe-tile" onClick={() => {}}>
                <img className="recipe-img" src={data.recipe.image} alt="%PUBLIC_URL%/placeholder.gif" />
                <h2 className="recipe-label">{data.recipe.label}</h2>
        </div>
    );
}
 
export default RecipeList;