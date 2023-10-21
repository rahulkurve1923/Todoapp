import { useState } from "react";
import {AiFillCheckSquare,AiOutlineSearch,GrAdd , AiFillDelete} from "react-icon"

function List (){

    const [todo ,  setTodo] = useState;
    const [inputvalue ,setInputvalue] = useState;

   function handlechange(e){
    setInputvalue(e.targer.value)
   } 
    const add =( ) => {
        setTodo ([...todo, inputvalue])
        setInputvalue ('')
    }

    const handeldelete =(index ) => {
      const newTodo = [...todo]
      newTodo.splice(index,1)
      setTodo(newTodo)
    }

    return (
    <>
         <h2 ><AiFillCheckSquare></AiFillCheckSquare>To Do's</h2>

         <input type="text" placeholder="search "><AiOutlineSearch></AiOutlineSearch></input>

         <ul> 
         {
            todo.map((todo,index ) => (
                <li key={index}>{todo} <button onClick={()=>handeldelete(index)}><AiFillDelete></AiFillDelete> </button></li>
            )) 
         }
        </ul>
        <form>
         <input type=" text " placeholder="Add New Task" value={inputvalue} onChange={handlechange}> </input>

         <input type="submit" onClick={add}><GrAdd></GrAdd></input>
         </form>

         </>
    );
}

export default List;