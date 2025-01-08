import {IAddress} from "./IAddress.ts";
import {ICompany} from "./ICompany.ts";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}


