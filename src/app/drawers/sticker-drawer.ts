import { Condition } from '../condition';

export class StickerDrawer {

	context:CanvasRenderingContext2D;
	condition:Condition;
	xPosition:number = 100;
	yPosition:number = 100;
	width:number = 100;

	constructor(condition:Condition) {
		this.condition = condition;
	}

	drawSticker():Promise<void> {
		return new Promise((resolve, reject) => {
	      let image = new Image();
	      image.src = this.imageUrl;
	      image.onload = () => {
	        //TODO: decide where to actually position these...
	        this.context.drawImage(image, this.xPosition, this.yPosition, this.width, this.width*image.naturalHeight/image.naturalWidth);
	        resolve();
	      }
	    });
	}

	private get imageUrl():string {
	  	return 'assets/' + this.condition.domain + '/' + this.condition.presentation + '_' + this.condition.relevance + '_' + this.condition.style + '.png';
  	}
}
