import { useState } from "react";
import { createContext } from "react";
import axios from "axios";


export let TodosContext = createContext()

function TodoListProvider({ children }) {
    let [todos, setTodos] = useState([])
    function addNewTodo(newTodo) {
        axios.post("http://localhost:3001/AddTask", newTodo)
            .then(
                response => {
                    setTodos([...response])
                }
            )
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <TodosContext.Provider value={[todos, addNewTodo]}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodoListProvider