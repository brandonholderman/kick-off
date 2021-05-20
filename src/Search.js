import Axios from "axios";
import { useState } from 'react';
import RecipeList from "./RecipeList";

const Search = (props) => {
    const [query, setQuery] = useState(``);
    const [recipes, setRecipes] = useState([]);

    const howMuchToShow = 6;
    const appID = "81ceb48b";
    const appKey = "9fbaca94b8e452b62cd29bd36959519d";

    // let queryStringForApi = randomIngredients.join(' ').replace(/\s/g, '+');
    let url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&to=${howMuchToShow}`;

    const getRecipes = async () => {
        let result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getRecipes()
    }

    return (
        <div className="blog-list">
            <h1>Kick Off Your Next Meal Here!</h1>
            <form className="blog-preview" onClick={handleSubmit}>
                <input className="create" type="text" 
                placeholder="Enter Ingredient(s)" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                />
                <input className="search-button" type="submit" value="Search" />
            </form>
            <div className="recipe-list">
                {recipes.map(recipe => {
                    return <RecipeList data={ recipe }/>
                })}
            </div>
        </div>       
    );
}
 
export default Search;