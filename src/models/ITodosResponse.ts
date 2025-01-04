import {ITodo} from "./ITodo.ts";

export interface ITodosResponse {
	todos: ITodo[];
	total: number;
	skip: number;
	limit: number;
}
