import { v4 as uuidv4 } from 'uuid'; // Import uuid   faced a lot of issues by putting as date.now() as id , since it did'nt work so I choose uuid
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id:uuidv4(),...todo},...prev])
  }
  
  const updateTodo = (id,todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo:prevTodo)))
  }
  // if(prevTodo.id === id){
  //   todo
  // }else{
  //   prevTodo
  // }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }  //map vs filter
  // 'Map' is used to apply a function on every item in an array and returns the new array. 
  //'Filter' is used to create a new array from an existing one, containing only those items that satisfy a condition specified in a  function.

  const toggleComplete = (id) =>{
    setTodos((prev) =>
       prev.map((prevTodo) => 
        prevTodo.id ===id? {...prevTodo,
          completed: !prevTodo.completed} : prevTodo))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() =>{  // for dependency of above
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className="w-full"
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            </TodoProvider>
  );
}

export default App
