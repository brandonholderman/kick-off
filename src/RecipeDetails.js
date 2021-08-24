import React from "react";
import { MdClose } from "react-icons/md"

const RecipeDetails = (props) => {
    if (!props.show) return null;

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.data.recipe.label}</h4>
                </div>
                <div className="modal-body">
                    <img src={props.data.recipe.image} alt=""/>
                    {/* <a href={ props.data.recipe.url } className="recipe-link">Full Recipe</a> */}
                    <ul className="modal-list">{props.data.recipe.ingredientLines.map((ingredients, index) => {
                        return <li key={index}>{ ingredients }</li>
                    })}</ul>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-close">
                        <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default RecipeDetails;