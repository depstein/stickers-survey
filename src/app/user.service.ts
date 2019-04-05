import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { generate } from 'shortid';
import { alea } from 'seedrandom';
import { Condition } from './condition';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	@LocalStorage() uid:string = generate();
	@LocalStorage() role:string = undefined;
	@LocalStorage() domain:string = undefined;
	stickers:Condition[] = [];
	@LocalStorage() stickerIndex:number = 0;
	rng;

  constructor() {
  	//To ensure the same stickers are always selected, seed the rng according to the User ID
  	this.rng = alea(this.uid);
  	this.selectStickers();
  }

  get currentSticker():Condition {
  	return this.stickers[this.stickerIndex];
  }

  selectStickers() {
  	this.stickers = [];
  	var presentations = this.shuffle(['chartjunk', 'chartjunk', 'plain', 'plain', 'analogy', 'analogy']);
  	var aggregationLevels = this.shuffle(['low', 'low', 'low', 'high', 'high', 'high']);
  	var contexts = this.shuffle(['no', 'no', 'no', 'yes', 'yes', 'yes']);
  	//TODO: in analysis, remember that scenarios are domain-dependent and styles are domain- and aggregation-dependent.
  	var scenarios = this.shuffle([0, 0, 1, 1, 2, 2]);
  	var styles = this.shuffle([this.upTo(3), this.upTo(3), this.upTo(3), this.upTo(3), this.upTo(3), this.upTo(3)]);
  	for(var i=0;i<6;i++) {
  		this.stickers.push(new Condition(presentations[i], aggregationLevels[i], contexts[i], scenarios[i], styles[i], this.domain, this.role));
  	}
  }

  upTo(n:number):number {
  	return Math.floor(this.rng()*n);
  }

  reset() {
  	//Nose that this just resets the survey to the beginning... I think that's what I want for now.
  	//To ensure the same stickers are always selected, seed the rng according to the User ID
  	this.rng = alea(this.uid);
  	this.selectStickers();
  	this.stickerIndex = 0;
  }

  shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
    	const j = Math.floor(this.upTo(i + 1));
    	[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
  }
}
