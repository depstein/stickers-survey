import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Condition } from '../condition';
import { CaptionDrawer } from '../drawers/caption-drawer';
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
  caption:CaptionDrawer;


  constructor() {
  }

  ngOnInit() {
    this.initializeDrawers();
  }

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.sticker.context = this.context;
    this.background.context = this.context;
    this.caption.context = this.context;
    this.drawEverything();
  }

  ngOnChanges() {
    this.initializeDrawers();
    this.drawEverything();
  }

  drawEverything() {
    if(this.context) {
      this.resetCanvas();
      this.background.drawBackground().then(() => {
        this.resetTransform();
        this.sticker.drawSticker().then(() => {
          this.resetTransform();
          this.caption.drawCaption();
        });
      });
    }
  }

  initializeDrawers() {
    this.background = new BackgroundDrawer(this.condition, this.canvasWidth, this.canvasHeight, this.ratio);
    this.caption = new CaptionDrawer(this.condition, this.canvasWidth, this.canvasHeight, this.ratio);
    this.sticker = new StickerDrawer(this.condition, this.canvasWidth, this.canvasHeight, this.ratio);
    this.canvasBackground = this.background.backgroundStr;
    this.sticker.context = this.context;
    this.background.context = this.context;
    this.caption.context = this.context;
  }

  resetTransform() {
    this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
  }

  resetCanvas() {
    this.resetTransform();
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
}
