// import Axios from "axios";
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";


const RecipeList = ({ data }) => {
    // const appID = "81ceb48b";
    // const appKey = "9fbaca94b8e452b62cd29bd36959519d";

    // const [recipeUri, setRecipeUri] = useState(``);
    
    // let urlID = `https://api.edamam.com/search?r=${recipeUri}&app_id=${appID}&app_key=${appKey}`;

    // const getRecipeUri = async () => {
    //     let result = await Axios.get(urlID);
    //     setRecipeUri(result);
    //     console.log(result);
    // }

    // const showDetails = () => {
    //     getRecipeUri();
    //     return <iframe src={data.recipe.url} title={data.recipe.label} />;
    // }
    const [show, setShow] = useState(false);
    const [recipeData, setRecipeData] = useState({});

    return (
        // data.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && 
        <div className="recipe-tile">
            <img className="recipe-img" src={ data.recipe.image } alt="%PUBLIC_URL%/placeholder.gif" />
            <h2 className="recipe-label">{ data.recipe.label }</h2>
            {/* <a href={ data.recipe.url } className="recipe-link">Full Recipe</a> */}
            <div>
                <button className="details-button" onClick={ () => {setShow(true); setRecipeData(Object.keys(data))}}>Recipe Details</button>
                <RecipeDetails onClose={ () => setShow(false) } show={ show } data={ recipeData } />
            </div>
        </div>
    );
}
 
export default RecipeList;