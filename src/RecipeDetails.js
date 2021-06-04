const RecipeDetails = ({ data }) => {
    return (
        <div className="blog-preview">
            <h2 className="blog-details">{data.recipe.label}</h2>
            <img src={data.recipe.image} alt=""/>
            {/* <ul className="ingredient-list">
                <li>{data.recipe.ingredientLines + '\n'}</li>
            </ul> */}
        </div>
    );
}
 
export default RecipeDetails;