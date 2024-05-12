import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
 
   const [inputList ,setinputList] = useState("");
   const [item ,setitem] = useState([]);

   const input  = (event) =>{
      setinputList(event.target.value);
   }
   
   const listOfItem =()=>{
    setitem ((oldItem) =>{
      return [...oldItem,inputList];
    })
    setinputList("");
   } ;

   const deleteItem = (id)=> {
    
    setitem((oldItem)=>{
      return oldItem.filter((arrElem,index )=> {
        return id!== index ;
      })
    })
   }

  return (
    <>
    <div className="main_dev">
     <div className="center_name">
     
     <h1>ToDO List</h1>
     <br />
     <input
      type="text" 
      value={inputList}
      placeholder="Add a Item"
      onChange={input}
     
     />
     <button onClick={listOfItem}>+</button>




      <ol>
      {
        item.map((itemval,index) => {
         return ( <ToDoList 
         text={itemval}
         id={index}
         key ={index}
         onSelect = {deleteItem}
         />
         );

        })
      }
      </ol>
     
     </div>
    
    </div>
    </>
  );
};

export default App;
