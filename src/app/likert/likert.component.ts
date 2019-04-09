import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.css']
})
export class LikertComponent implements OnInit {
	@Input() low:string;
	@Input() high:string;
	@Input() name:string;
	@Input() points:number = 5;
	values:number[];
	@Input() selected:number;
  @Output() selectedChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.values = Array(this.points).fill(0).map((x, i)=> i);
  }

  onChange() {
    this.selectedChange.emit(this.selected);
  }

}
