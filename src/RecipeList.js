import RecipeDetails from "./RecipeDetails";

const RecipeList = ({ data }) => {

    return (
        <div className="blog-preview">
            <img src={data.recipe.image} />
            <h2 className="blog-details">{data.recipe.label}</h2>
            <p>{data.recipe.ingredientLines + '\n'}</p>
        </div>
    );
}
 
export default RecipeList;