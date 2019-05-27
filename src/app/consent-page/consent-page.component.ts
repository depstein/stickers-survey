import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.css']
})
export class ConsentPageComponent implements OnInit {
  ageCheck:boolean;
  snapCheck:boolean;
  consentCheck:boolean;
  mturk:boolean = true;

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.mturk = environment.mturk;
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
