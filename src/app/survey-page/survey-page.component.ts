import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  nextSticker() {
  	if(this.userService.stickerIndex < this.userService.stickers.length - 1) {
  		this.userService.stickerIndex += 1;
  	} else {
  		this.router.navigate(['demographics']);
  	}
  }

  reset() {
  	this.userService.reset();
  }

}
