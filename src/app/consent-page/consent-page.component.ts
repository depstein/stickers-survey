import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { UserService } from '../user.service';

@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.css']
})
export class ConsentPageComponent implements OnInit {
  ageCheck:boolean;
  snapCheck:boolean;
  consentCheck:boolean;

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(selectForm:NgForm) {
    if(this.ageCheck && this.snapCheck && this.consentCheck) {
      this.router.navigate(['instructions']);
    } else {
      //They did not consent, are not old enough, or do not use Snapchat enough
      this.router.navigate(['sorry']);
    }
  }

}
