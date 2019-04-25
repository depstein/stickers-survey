import { Condition } from '../condition';

export class ScenarioDrawer {
	context:CanvasRenderingContext2D;
	condition:Condition;
	canvasWidth:number;
	canvasHeight:number;
	ratio:number;

	constructor(condition:Condition, canvasWidth:number, canvasHeight:number, ratio:number) {
		this.condition = condition;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.ratio = ratio;
	}

	//Image onload is async, so use a promise so the background is always drawn first.
	drawScenario():Promise<void> {
		this.context.globalAlpha = 0.75;
		this.context.fillStyle = "#000000";
		this.context.fillRect(0, this.canvasHeight/(2*this.ratio), this.canvasWidth/this.ratio, 25);
		this.context.globalAlpha = 1;
		this.context.textAlign = "center";
		this.context.font = "19px Arial";
		this.context.fillStyle = "#FFFFFF";
		this.context.fillText("Scenario " + this.condition.scenario, this.canvasWidth/(2*this.ratio), this.canvasHeight/(2*this.ratio) + 20, this.canvasWidth/this.ratio);
		this.context.textAlign = "left";
		return Promise.resolve();
	}

	
}
