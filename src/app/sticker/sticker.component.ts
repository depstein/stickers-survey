import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Condition } from '../condition';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {
	//TODO: remove me!!!
	static readonly GeneratedSoFar = {'activity':2, 'music': 1};
  // [presentation][condition][style]
  static readonly BackgroundMap = {
    'plain': {'low':{0:'microbial', 1:'arrows', 2:'zigzag'}, 'high':{0:'weave', 1:'upholstery', 2:'rainbow'}},
    'chartjunk': {'low':{0:'steps', 1:'waves', 2:'stars'}, 'high':{0:'bradybunch', 1:'shippo', 2:'bricks'}},
    'analogy': {'low':{0:'tartan', 1:'madras', 2:'blueprint'}, 'high':{0:'cicada', 1:'honeycomb', 2:'pyramid'}}
  }
	@Input() condition:Condition;
  @ViewChild('stickerCanvas') canvas:ElementRef;
  ratio = window.devicePixelRatio || 1;
  canvasWidth:number = 300 * this.ratio;
  canvasHeight:number = 600 * this.ratio;
  canvasBackground:string;
  context:CanvasRenderingContext2D;

  constructor() {
  }

  ngOnInit() {
    this.canvasBackground = StickerComponent.BackgroundMap[this.condition.presentation][this.condition.aggregation][this.condition.style];
  }

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.drawEverything();
  }

  ngOnChanges() {
    this.drawEverything();
  }

  drawEverything() {
    if(this.context) {
      this.resetCanvas();
      this.drawBackground().then(() => {
        this.drawScenario().then(() => {
          this.drawSticker();
        });
      });
    }
  }

  resetCanvas() {
    this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  //Image onload is async, so use a promise so the background is always drawn first.
  drawBackground():Promise<void> {
    return new Promise((resolve, reject) => {
      if(this.condition.context == "no") {
        //Nothing to do here, the canvas background will take care of it.
        resolve();
      } else {
        //Draw an image as the background
        //TODO: load image dynamically based on the scenario
        let image = new Image();
        image.src = 'assets/background.jpg';
        image.onload = () => {
          this.context.drawImage(image, 0, 0, this.canvasWidth, this.canvasHeight);
          resolve();
        }
      }
    });
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

  //Image onload is async, so use a promise so the background is always drawn first.
  drawSticker() {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = this.imageUrl;
      image.onload = () => {
        //TODO: decide where to actually position these...
        this.context.drawImage(image, 100, 100, 100, 100);
        resolve();
      }
    });
  }

  private get imageUrl():string {
  	if (this.condition.domain in StickerComponent.GeneratedSoFar && this.condition.style < StickerComponent.GeneratedSoFar[this.condition.domain]) {
  		return 'assets/' + this.condition.domain + '/' + this.condition.presentation + '_' + this.condition.aggregation + '_' + this.condition.style + '.png';
  	} else if(this.condition.domain in StickerComponent.GeneratedSoFar) {
  		return 'assets/' + this.condition.domain + '/' + this.condition.presentation + '_' + this.condition.aggregation + '_0.png';
  	} else {
  		return 'assets/error.png';
  	}
  }

}
