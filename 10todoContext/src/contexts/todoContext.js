import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
          id: 1,
          todo: "this is a msg",
          completed: false,
    }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});


export const usetodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider