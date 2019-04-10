import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.css']
})
export class LikertComponent implements OnInit {
	@Input() label:string;
  @Input() low:string = "Strongly Disagree";
	@Input() high:string = "Strongly Agree";
	@Input() name:string;
	@Input() points:number = 7;
	values:number[];
	@Input() selected:number;
  @Output() selectedChange = new EventEmitter();
  valid:boolean;

  constructor() {
  }

  ngOnInit() {
    this.values = Array(this.points).fill(0).map((x, i)=> i+1);
  }

  onChange() {
    this.selectedChange.emit(this.selected);
  }

  checkValid() {
    this.valid = this.selected?true:false;
  }

}
