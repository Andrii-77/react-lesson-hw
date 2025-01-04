import {ITodo} from "../../models/ITodo.ts";
import './Todo.css'

interface TodoProps {
    item: ITodo
}

export const Todo = ({item}: TodoProps) => {
    return (
        <div>
            <h3 className={item.completed ? 'complete' : 'non-complete'}>{item.title}</h3>
        </div>
    );
};