export class Scales {
	//I find this Snap fun to send/receive. (Xu 2009)
	fun_ENT:number;
	//I find this Snap exciting to send/receive. (Xu 2009)
	exciting_ENT:number;
	//I learn a lot about my close friend or family member from this Snap. (Lee 2016)
	learn_INF:number;
	//I think the information obtained about my close friend or family member from this Snap is helpful. (Lee 2016)
	helpful_INF:number;
	//I think my benefits I would gain from sending this Snap would offset the risks of my information disclosure. (Xu 2011)
	benefits_PRIV:number;
	//The value I would gain from sending this Snap is worth the information I would give away. (Xu 2011)
	value_PRIV:number;
	//I am inclined to send this Snap/respond to this Snap. (Lee 2016)
	inclined_USE:number;
	//I might send this Snap/respond to this Snap. (Lee 2016)
	might_USE:number;
	//I feel good about sending this Snap/responding to this Snap. (Lee 2016)
	good_ATT:number;
	//I feel positive about sending this Snap/responding to this Snap. (Lee 2016)
	positive_ATT:number;

	//reaction, more qualitative
	//either "How would you feel about sharing this Snap?" or "How would you react to seeing this Snap?"
	reaction:string;

	public Scales() {

	}

	get ENT():number {
		return this.fun_ENT + this.exciting_ENT;
	}

	get INF():number {
		return this.learn_INF + this.helpful_INF;
	}

	get PRIV():number {
		return this.benefits_PRIV + this.value_PRIV;
	}

	get USE():number {
		return this.inclined_USE + this.might_USE;
	}

	get ATT():number {
		return this.positive_ATT + this.good_ATT;
	}

	get allScales() {
		return {'ENT':this.ENT, 'INF':this.INF, 'PRIV':this.PRIV, 'USE':this.USE, 'ATT':this.ATT}
	}
}
