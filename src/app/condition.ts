export class Condition {
	static readonly VALUES = {activity: '5,793 steps', food: '1,064 calories', time: '2 hours, 42 minutes', music: '11 plays', heartrate: '108 beats per minute'}
	static readonly LIMITS = {activity: '10,000 steps', food: '2,000 calories', time: '5 hours', music: '20 plays', heartrate: '190 beats per minute'}

	// style of sticker. plain, chartjunk, or analogy
	presentation:string;
	// is it relevant or not. no or yes
	relevance:string;
	// is it in-context (in front of a picture) or by itself. no or yes
	context:string;
	// one of three scenarios
	scenario:number;
	// one of three styles
	style:number;
	// domain of the sticker. activity, music, time, food, or heartrate
	domain:string;
	// role the participant is taking in the survey. sharer or recipient
	role:string;

	constructor(presentation, relevance, context, scenario, style, domain, role) {
		this.presentation = presentation;
		this.relevance = relevance;
		this.context = context;
		this.scenario = scenario;
		this.style = style;
		this.domain = domain;
		this.role = role;
	}

	get value():string {
		return Condition.VALUES[this.domain];
	}

	get limit():string {
		return Condition.LIMITS[this.domain];
	}
}
