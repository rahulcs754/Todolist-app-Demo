"use client"

import { useTodos } from "@/store/todos";
import {useState, FormEvent} from "react";

function AddTodo() {
 
  const [todo ,setTodo] = useState("");
   const {handleAddTodo} = useTodos()!;
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log("New Todo:", todo);
    
    handleAddTodo(todo);
    setTodo("");
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={todo}  onChange={(event)=>setTodo(event.target.value)} placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;