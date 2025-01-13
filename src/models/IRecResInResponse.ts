import {ISupport} from "./ISupport.ts";
import {IUser} from "./IUser.ts";

export interface IRecResInResponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: IUser[];
	support: ISupport;
}