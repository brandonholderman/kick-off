// import useAxios from './useAxios';
import Axios from "axios";
import { useState } from 'react';
import RecipeList from "./RecipeList";


const Search = () => {
    const [query, setQuery] = useState(``);
    const [recipes, setRecipes] = useState([]);
    
    const howMuchToShow = 9;
    const APP_ID = process.env.REACT_APP_APP_ID
    const APP_KEY = process.env.REACT_APP_APP_KEY
    let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=${howMuchToShow}`;
    
    // let urlV2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appKey}&app_key=${appKey}&to=${howMuchToShow}`;
    // const { data, isLoading, error } = useAxios(url);

    const getRecipes = async () => {
        let result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getRecipes();
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
                    console.log(recipe.recipe.uri)
                    return <RecipeList data={ recipe }/>
                })}
            </div>
        </div>       
    );
}
 
export default Search;