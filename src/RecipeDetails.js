const RecipeDetails = (props) => {
    if (!props.show) {
        return null;
    }

    console.log(props);
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.data.recipe.label}</h4>
                </div>
                <div className="modal-body">
                    <img src={props.data.recipe.image} alt=""/>
                    {/* <a href={ props.data.recipe.url } className="recipe-link">Full Recipe</a> */}
                    <li>{props.data.recipe.ingredientLines + '\n'}</li>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-close">Close</button>
                </div>
            </div>
        </div>
    );
}
 
export default RecipeDetails;