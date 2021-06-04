import Axios from "axios";
import { useState } from 'react';
import RecipeList from "./RecipeList";

const Search = () => {
    const [query, setQuery] = useState(``);
    const [recipes, setRecipes] = useState([]);

    const howMuchToShow = 9;
    const appID = "81ceb48b";
    const appKey = "9fbaca94b8e452b62cd29bd36959519d";

    let url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&to=${howMuchToShow}`;

    const getRecipes = async () => {
        let result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getRecipes()
    }

    return (
        <div className="container">
            <img src="kick-off-logo.png" className="logo" alt="" />
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="user-input" type="text" 
                placeholder="Enter Ingredient(s)" 
                value={ query } 
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