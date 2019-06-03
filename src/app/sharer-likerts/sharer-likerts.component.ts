import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LikertComponent } from '../likert/likert.component';
import {Scales} from '../scales';

@Component({
  selector: 'app-sharer-likerts',
  templateUrl: './sharer-likerts.component.html',
  styleUrls: ['./sharer-likerts.component.css']
})
export class SharerLikertsComponent implements OnInit {
  minCharacters:number = 20;
  @ViewChild('fun_ENT') funEl:LikertComponent;
  @ViewChild('exciting_ENT') excitingEl:LikertComponent;
  @ViewChild('benefits_PRIV') benefitsEl:LikertComponent;
  @ViewChild('value_PRIV') valueEl:LikertComponent;
  @ViewChild('inclined_USE') inclinedEl:LikertComponent;
  @ViewChild('might_USE') mightEl:LikertComponent;
  @ViewChild('good_ATT') goodEl:LikertComponent;
  @ViewChild('positive_ATT') positiveEl:LikertComponent;
  likerts:LikertComponent[] = new Array();
  reactionValid:string;

  scales:Scales = new Scales();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.likerts.push(this.funEl);
    this.likerts.push(this.excitingEl);
    this.likerts.push(this.benefitsEl);
    this.likerts.push(this.valueEl);
    this.likerts.push(this.inclinedEl);
    this.likerts.push(this.mightEl);
    this.likerts.push(this.goodEl);
    this.likerts.push(this.positiveEl);
  }

  get isValid():boolean {
    //Check them all so they all turn red/green.
    this.likerts.forEach(l => {
      l.checkValid();
    });
    //Check reaction manually, since it's not in a scale
    this.reactionValid = (this.scales.reaction && this.scales.reaction.length >= this.minCharacters) ? 'is-valid' : 'is-invalid';
    return this.likerts.every(l => l.valid) && this.reactionValid == 'is-valid';
  }

  reset() {
    //Reset the scales data
    Object.keys(this.scales).forEach(k => {
      this.scales[k] = undefined;
    });
    //Reset validity
    this.likerts.forEach(l => l.valid = undefined);
    this.reactionValid = undefined;
  }
}
