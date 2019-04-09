export class Condition {
	// style of sticker. plain, chartjunk, or analogy
	presentation:string;
	// is it today or this week. low or high
	aggregation:string;
	// is it in-context (in front of a picture) or by itself. no or yes
	context:string;
	// one of three scenarios
	scenario:number;
	// one of three styles
	style:number;
	// domain of the sticker. activity, music, location, ...
	domain:string;
	// role the participant is taking in the survey. sharer or recipient
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
