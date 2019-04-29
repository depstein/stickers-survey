import { Condition } from '../condition';

export class BackgroundDrawer {
	// [presentation][condition][style]
	  static readonly BackgroundMap = {
	    'plain': {'no':{0:'microbial', 1:'arrows', 2:'zigzag'}, 'yes':{0:'weave', 1:'upholstery', 2:'rainbow'}},
	    'chartjunk': {'no':{0:'steps', 1:'waves', 2:'stars'}, 'yes':{0:'bradybunch', 1:'shippo', 2:'bricks'}},
	    'analogy': {'no':{0:'tartan', 1:'madras', 2:'blueprint'}, 'yes':{0:'cicada', 1:'honeycomb', 2:'pyramid'}}
	  }

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

	get backgroundStr():string {
		return BackgroundDrawer.BackgroundMap[this.condition.presentation][this.condition.relevance][this.condition.scenario];
	}

	drawBackground():Promise<void> {
		return new Promise((resolve, reject) => {
	      if(this.condition.context == "no") {
	        //Nothing to do here, the canvas background will take care of it.
	        resolve();
	      } else {
	        //Draw an image as the background
	        //TODO: load image dynamically based on the scenario
	        let image = new Image();
	        image.src = 'assets/' + this.condition.domain + '/background_' + this.condition.scenario  + '.jpg';
	        image.onload = () => {
	          this.context.drawImage(image, 0, 0, this.canvasWidth / this.ratio, this.canvasHeight / this.ratio);
	          resolve();
	        }
	      }
	    });
	}
}
