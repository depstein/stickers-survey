import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FirebaseService } from '../firebase.service';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Response} from '../response';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {
  atob:number;
  atob_valid:boolean;

  constructor(private router:Router, private userService:UserService, private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  nextSticker(surveyForm:NgForm) {
    if(this.dataValid()) {
      this.saveData();
      this.resetLikerts();
      if(this.userService.stickerIndex < this.userService.stickers.length - 1) {
        this.userService.stickerIndex += 1;
      } else {
        this.router.navigate(['demographics']);
      }
    }
  }

  dataValid():boolean {
    //TODO: should a likert be able to check its own validity?
    this.atob_valid = this.atob?true:false;
    return this.atob_valid;
  }

  saveData() {
    this.firebaseService.addResponse(new Response(this.userService.currentSticker, this.userService.uid, this.atob));
  }

  resetLikerts() {
    this.atob = undefined;
    this.atob_valid = undefined;
  }

  resetUser() {
  	this.userService.reset();
    this.resetLikerts();
  }

}
