import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
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
