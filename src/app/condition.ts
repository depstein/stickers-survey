export class Condition {
	presentation:string;
	aggregation:string;
	context:string;
	scenario:number;
	style:number;
	domain:string;
	role:string;

	constructor(presentation, aggregation, context, scenario, style, domain, role) {
		this.presentation = presentation;
		this.aggregation = aggregation;
		this.context = context;
		this.scenario = scenario;
		this.style = style;
		this.domain = domain;
		this.role = role;
	}
}
