import { Condition } from './condition';

export class Response {
	presentation:string;
	aggregation:string;
	context:string;
	scenario:number;
	style:number;
	domain:string;
	role:string;
	uid:string;
	atob:number;

	constructor(condition:Condition, uid:string, atob:number) {
		this.presentation = condition.presentation;
		this.aggregation = condition.aggregation;
		this.context = condition.context;
		this.scenario = condition.scenario;
		this.style = condition.style;
		this.domain = condition.domain;
		this.role = condition.role;
		this.uid = uid;
		this.atob = atob;
	}

	public getData():object {
		const result = {};
		Object.keys(this).map(key => result[key] = this[key]);
		return result;
	}
}
