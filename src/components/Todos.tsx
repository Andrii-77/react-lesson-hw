import {Todo} from "./todo/Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {todoService} from "../services/api.service.ts";

export const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    
    useEffect(() => {
        todoService.getTodos()
            .then((iTodos: ITodo[]) => {
                setTodos(iTodos);
            });
    }, []);
    return (
        <>
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </>
    );
};

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(value => value.json())