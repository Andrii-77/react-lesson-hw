import {ITodosResponse} from "../models/ITodosResponse.ts";

const url = import.meta.env.VITE_API_URL;

const getAllTodos= async (): Promise<ITodosResponse> => {

    const todosResponseObject = await fetch(url + '/todos')
        .then(value => value.json());

    return todosResponseObject;
}

export {
    getAllTodos
}