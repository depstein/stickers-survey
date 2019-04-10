import { Condition } from './condition';
import { Scales } from './scales';

export class Response {
	condition:Condition;
	scales:Scales;
	uid:string;

	constructor(condition:Condition, scales:Scales, uid:string) {
		this.condition = condition;
		this.scales = scales;
		this.uid = uid;
	}

	public getData():object {
		const result = {'uid': this.uid};
		Object.keys(this.scales).map(key => result[key] = this.scales[key]);
		Object.keys(this.condition).map(key => result[key] = this.condition[key]);
		//TODO: check that this works...
		console.log(result);
		return result;
	}
}
