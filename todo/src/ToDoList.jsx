import React from "react";

const ToDoList = (propx) => {

    return (
        <>
            <div className="todo">
                <li> <span className="material-symbols-outlined" onClick={()=>{
                    propx.onSelect(propx.id);
                }}> close</span> {propx.text}</li>
            </div>
        </>
    )
}

export default ToDoList;