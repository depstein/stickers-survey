import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Condition } from '../condition';
import { ScenarioDrawer } from '../drawers/scenario-drawer';
import { BackgroundDrawer } from '../drawers/background-drawer';
import { StickerDrawer } from '../drawers/sticker-drawer';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {
  
	@Input() condition:Condition;
  @ViewChild('stickerCanvas') canvas:ElementRef;
  ratio = window.devicePixelRatio || 1;
  canvasWidth:number = 277 * this.ratio;
  canvasHeight:number = 600 * this.ratio;
  canvasBackground:string;
  context:CanvasRenderingContext2D;
  background:BackgroundDrawer;
  sticker:StickerDrawer;
  scenario:ScenarioDrawer;


  constructor() {
  }

  ngOnInit() {
    this.background = new BackgroundDrawer(this.condition, this.canvasWidth, this.canvasHeight);
    this.scenario = new ScenarioDrawer(this.condition, this.canvasWidth, this.canvasHeight, this.ratio);
    this.sticker = new StickerDrawer(this.condition);
    this.canvasBackground = this.background.backgroundStr;
  }

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.sticker.context = this.context;
    this.background.context = this.context;
    this.scenario.context = this.context;
    this.drawEverything();
  }

  ngOnChanges() {
    this.drawEverything();
  }

  drawEverything() {
    if(this.context) {
      this.resetCanvas();
      this.background.drawBackground().then(() => {
        this.scenario.drawScenario().then(() => {
          this.sticker.drawSticker();
        });
      });
    }
  }

  resetCanvas() {
    this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
}
