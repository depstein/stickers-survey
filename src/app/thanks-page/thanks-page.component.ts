import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.css']
})
export class ThanksPageComponent implements OnInit {

  constructor(private userService:UserService) {
  	
  }

  ngOnInit() {
  }

}
