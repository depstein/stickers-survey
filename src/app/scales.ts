export class Scales {
	//I find this Snap fun to send/receive. (Xu)
	fun_ENT:number;
	//I find this Snap exciting to send/receive. (Xu)
	exciting_ENT:number;
	//I learn a lot about my close friend or family member from this Snap. (Lee)
	learn_INF:number;
	//I think the information obtained about my close friend or family member from this Snap is helpful. (Lee)
	helpful_INF:number;
	//I trust Snapchat with the information I included in this Snap. (loosely inspired by https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1849&context=amcis2007)
	trust_PRIV:number;
	//I believe that Snapchat would protect the information I included in this Snap. (loosely inspired by https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1849&context=amcis2007)
	protect_PRIV:number;
	//I am inclined to send this Snap/respond to this Snap. (Lee)
	inclined_USE:number;
	//I might send this Snap/respond to this Snap. (Lee)
	might_USE:number;
	//I feel good about sending this Snap/responding to this Snap. (Lee)
	good_ATT:number;
	//I feel positive about sending this Snap/responding to this Snap. (Lee)
	positive_ATT:number;

	//reaction, more qualitative
	//either "How would you feel about sharing this Snap?" or "How would you react to seeing this Snap?"
	reaction:string;

	public Scales() {

	}
}
