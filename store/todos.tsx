"use client"

import { createContext , ReactNode, useContext, useState} from "react";

export type Todo = {
    id:string;
    text:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContextType = {    
    todos: Todo[];
    handleAddTodo: (todo:string) => void;
    toggleTodoAsCompleted: (id:string) => void;
    handleTodoDelete: (id:string) => void;  
}

const todosContext = createContext<TodosContextType | null>(null);

const TodosProvider = ({children}:{children:ReactNode}) =>{

    const [todos,setTodo] = useState<Todo[]>(()=>{
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const handleAddTodo = (todo:string):void =>{
        setTodo((prev:Todo[])=>{
            const newTodo : Todo[] = [
                {
                    id:Math.random().toString(36).substring(2,9),
                    text:todo,
                    completed:false,
                    createdAt: new Date()
                },
                ...prev
            ];
            localStorage.setItem("todos" , JSON.stringify(newTodo));    
            return newTodo;
        })
    }

    const toggleTodoAsCompleted = (id:string):void =>{
        setTodo((prev:Todo[])=>{
            const updatedTodos = prev.map((todo:Todo)=>{    
                if(todo.id === id){
                    return {
                        ...todo,    
                    completed: !todo.completed          
                    }
                }       
                return todo;
            });
            localStorage.setItem("todos" , JSON.stringify(updatedTodos));
            return updatedTodos;
        })
    }

    const handleTodoDelete = (id:string):void =>{
        setTodo((prev:Todo[])=>{
            const filteredTodos = prev.filter((todo:Todo) => todo.id !== id);
            localStorage.setItem("todos" , JSON.stringify(filteredTodos));
            return filteredTodos;
        })
    }   
    return <todosContext.Provider value={{todos,handleAddTodo , toggleTodoAsCompleted ,handleTodoDelete }}>{children}</todosContext.Provider>
};

const useTodos = () => useContext(todosContext);

export {TodosProvider, useTodos};