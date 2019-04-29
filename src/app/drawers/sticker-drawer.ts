import { Condition } from '../condition';

export class StickerDrawer {

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

	drawSticker():Promise<void> {
		return new Promise((resolve, reject) => {
	      	let image = new Image();
	      	image.src = this.imageUrl;
		    image.onload = () => {
		      	let xPosition = 100;
		      	let yPosition = 100;
		      	let width = 120;
		      	switch(this.condition.context) {
		      		case "yes":
		      			//smaller sticker, position slightly differently in each scenario
		      			//All stickers are delicately positioned relative to their rotation...
		      			switch(this.condition.scenario) {
		      				case 0:
		      				xPosition = 70;
		      				yPosition = 0;
		      				this.context.rotate(30 * Math.PI / 180);
		      				break;
		      				case 1:
		      				xPosition = 80;
		      				yPosition = 320;
		      				this.context.rotate(-10 * Math.PI / 180);
		      				break;
		      				case 2:
		      				this.context.rotate(15 * Math.PI / 180);
		      				xPosition = 140;
		      				yPosition = 370;
		      				break;
		      			}
		      		break;
		      		case "no":
		      			//Sticker should be larger, centered horizontally and vertically
		      			width = 200;
		      			xPosition = this.canvasWidth/(2*this.ratio) - width/2;
		      			yPosition = this.canvasHeight/(2*this.ratio) - (width*image.naturalHeight/image.naturalWidth)/2;
		      		break;
		      	}
		        this.context.drawImage(image, xPosition, yPosition, width, width*image.naturalHeight/image.naturalWidth);
		        resolve();
	      	}
	    });
	}

	private get imageUrl():string {
	  	return 'assets/' + this.condition.domain + '/' + this.condition.presentation + '_' + this.condition.relevance + '_' + this.condition.style + '.png';
  	}
}
