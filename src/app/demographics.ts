export class Demographics {
	score:number;
	age:number;
	gender:string;
	months:string;
	friends:string;
	weekly:string;
	feedback:string;
	person:string;

	constructor() {
	}

	getData() {
		const result = {};
		Object.keys(this).map(key => result[key] = this[key]);
		return result;
	}
}
