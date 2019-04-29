import { Condition } from '../condition';

export class CaptionDrawer {
	context:CanvasRenderingContext2D;
	condition:Condition;
	canvasWidth:number;
	canvasHeight:number;
	ratio:number;

	static readonly ScenarioTextMap = {
		'heartrate': ['Nervous, about to\ngive my speech...', 'Getting in\na workout! 🏃‍♀️', 'Had to run\nfor the bus 😫']
	}

	constructor(condition:Condition, canvasWidth:number, canvasHeight:number, ratio:number) {
		this.condition = condition;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.ratio = ratio;
	}

	getText():string[] {
		return CaptionDrawer.ScenarioTextMap[this.condition.domain][this.condition.scenario].split('\n');
	}

	//Image onload is async, so use a promise so the background is always drawn first.
	drawCaption():Promise<void> {
		//TODO: different with and without context?
		switch(this.condition.scenario) {
			//position slightly differently in each scenario
  			//All captions are delicately positioned relative to their rotation...
			case 0:
				this.context.rotate(-15 * Math.PI / 180);
  				xPosition = -30;
  				yPosition = 480;
  				var fontSize = 30;
  				var buffer = 10;
  				var maxWidth = Math.max(...this.getText().map((v => {return this.context.measureText(v).width;})));
				this.getText().forEach((v, i) => {
					this.context.font = "bold " + fontSize + "px Arial";
					let textWidth = this.context.measureText(v).width;
					this.context.shadowColor = '#000000';
					this.context.shadowBlur = 5;
					this.context.fillStyle = '#000000';
					//Write it 3 times down and to the right to create a dropshadow...
					for(var a=0;a<5;a++) {
						this.context.fillText(v, xPosition + (maxWidth - textWidth)/2 + a, yPosition + fontSize/3 + buffer + (fontSize + 1 + 1.5*buffer)* i + a);
					}
					this.context.shadowBlur = 0;
					//And then once how we actually wanted it
					this.context.fillStyle = "#f7e4ad";
					this.context.strokeStyle = '#000000';
					this.context.fillText(v, xPosition + (maxWidth - textWidth)/2, yPosition + fontSize/3 + buffer + (fontSize + 1 + 1.5*buffer)* i);
					this.context.strokeText(v, xPosition + (maxWidth - textWidth)/2, yPosition + fontSize/3 + buffer + (fontSize + 1 + 1.5*buffer)* i);
				});
				break;
			case 1:
				var xPosition = 100;
  				var yPosition = 20;
  				var fontSize = 30;
  				var buffer = 10;
  				this.context.rotate(10 * Math.PI / 180);
  				var maxWidth = Math.max(...this.getText().map((v => {return this.context.measureText(v.toUpperCase()).width;})));
				this.getText().forEach((v, i) => {
					this.context.font = fontSize + "px PT Sans Narrow";
					let textWidth = this.context.measureText(v.toUpperCase()).width;
					this.context.fillStyle = "#f9edf8";
					this.context.shadowColor = '#f442e5';
					this.context.shadowBlur = 10;
					//Apply it 3 times for extra blur effect...
					for(var a=0;a<3;a++) {
						this.context.fillText(v.toUpperCase(), xPosition + (maxWidth - textWidth)/2, yPosition + fontSize/3 + buffer + (fontSize + 1 + 1.5*buffer)* i);
					}
					this.context.shadowBlur = 0;
				});
				break;
			case 2:
				var xPosition = 10;
  				var yPosition = 120;
  				var fontSize = 20;
  				var buffer = 20;
  				this.context.rotate(-30 * Math.PI / 180);
  				var maxWidth = Math.max(...this.getText().map((v => {return this.context.measureText(v).width;})));
				this.getText().forEach((v, i) => {
					this.context.font = fontSize + "px Courier New";
					let textWidth = this.context.measureText(v).width;
					this.context.fillStyle = "#000000";
					this.context.fillRect(xPosition - buffer + (maxWidth - textWidth)/2, yPosition + (fontSize + 1 + 1.5*buffer)*i, textWidth + 2*buffer, fontSize + buffer);
					this.context.fillStyle = "#FFFFFF";
					this.context.fillText(v, xPosition + (maxWidth - textWidth)/2, yPosition + fontSize/3 + buffer + (fontSize + 1 + 1.5*buffer)* i);
				});
		}
		return Promise.resolve();
	}

	
}
