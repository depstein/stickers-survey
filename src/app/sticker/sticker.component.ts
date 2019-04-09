import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Condition } from '../condition';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {
	//TODO: remove me!!!
	static GeneratedSoFar = {'Activity':2, 'Music': 1};
	@Input() condition:Condition;
  @ViewChild('stickerCanvas') canvas:ElementRef;
  canvasWidth:number = 300;
  canvasHeight:number = 600;
  context:CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.drawEverything();
  }

  ngOnChanges() {
    this.drawEverything();
  }

  drawEverything() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBackground().then(() => {
      this.drawScenario().then(() => {
        this.drawSticker();
      });
    });
  }

  //Image onload is async, so use a promise so the background is always drawn first.
  drawBackground():Promise<void> {
    return new Promise((resolve, reject) => {
      if(this.condition.context == "no") {
        //Draw funny lines as the background
        //TODO: draw lines dynamically based on the data type, etc.
        this.context.fillStyle = "#FF0000";
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
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
    this.context.globalAlpha = 0.8;
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, this.canvasHeight/2, this.canvasWidth, 40);
    this.context.globalAlpha = 1;
    this.context.font = "40px Arial";
    this.context.fillStyle = "#FFFFFF";
    this.context.fillText("Scenario " + this.condition.scenario, 0, this.canvasHeight/2 + 40, this.canvasWidth);
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
  		return 'assets/' + this.condition.domain.toLowerCase() + '/' + this.condition.presentation + '_' + this.condition.aggregation + '_' + this.condition.style + '.png';
  	} else if(this.condition.domain in StickerComponent.GeneratedSoFar) {
  		return 'assets/' + this.condition.domain.toLowerCase() + '/' + this.condition.presentation + '_' + this.condition.aggregation + '_0.png';
  	} else {
  		return 'assets/error.png';
  	}
  }

}
