import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ToDoList = (props) => {
    // Function to capitalize each word
    const capitalizeWords = (text) => {
        return text.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    

    return (
        <>
            <div className="todo-item"> 
                <div className="circle-icon">
                    <FontAwesomeIcon icon={faTimes}
                     onClick={() =>{

                        props.onSelect(props.id);
                     }

                     }
                     
                     />
                </div>
                <span className="text">{capitalizeWords(props.text)}</span>
            </div>
        </>
    );
};

export default ToDoList;
