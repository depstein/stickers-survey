import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.css']
})
export class ThanksPageComponent implements OnInit {
	mturk:boolean = true;

  constructor(public userService:UserService) {
  	
  }

  ngOnInit() {
    this.mturk = environment.mturk;
  }

}
