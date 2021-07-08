// import { useState } from "react";

const RecipeDetails = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.label}</h4>
                </div>
                <div className="modal-body">
                    <img src={props.image} alt=""/>
                    <li>{props.ingredientLines + '\n'}</li>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-close">Close</button>
                </div>
            </div>
        </div>
    );
}
 
export default RecipeDetails;