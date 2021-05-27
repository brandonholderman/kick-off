// import Axios from "axios";
// import { useState } from 'react';

// const RecipeDetails = ({ data }) => {

//     const [recipes, setRecipes] = useState([]);
//     const [recipeID, setRecipeID] = useState()

//     const [Ingredients, setIngredients] = useState([]);

//     let url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`

//     const getRecipes = async () => {
//         let result = await Axios.get(url);
//         setRecipes(result.data.hits);
//         setIngredients(result.data.hits.recipe.ingredientLines);
//         console.log(result.data)
//     }


//     return (
//         <div className="blog-preview">
//             <h2 className="blog-details">{data.recipe.label}</h2>
//             <img src={data.recipe.image} alt=""/>
//             <ul></ul>
//         </div>
//     );
// }
 
// export default RecipeDetails;