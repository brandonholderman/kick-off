import React from "react";
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
// import useFirebase from "./useFirebase";


const RecipeList = ({ data }) => {

    const [show, setShow] = useState(false);
    const [recipeData, setRecipeData] = useState({});

    // function writeUserData(userId, name, email, imageUrl) {
    //     useFirebase.database().ref('users/' + userId).set({
    //         username: name,
    //         email: email,
    //         profile_picture : imageUrl
    //     });
    // }

    // const writeFavoritesData = () => {

    // }

    return (
        <div className="recipe-tile">
            <img className="recipe-img" src={ data.recipe.image } alt="%PUBLIC_URL%/placeholder.gif" />
            <h2 className="recipe-label">{ data.recipe.label }</h2>
            <div className="recipe-button">
                <button className="details-button" 
                        onClick={ () => {setShow(true); setRecipeData(data)}}>Recipe Details</button>
                <RecipeDetails onClose={ () => setShow(false) } show={ show } data={ recipeData } />
            </div>
        </div>
    );
}
 
export default RecipeList;