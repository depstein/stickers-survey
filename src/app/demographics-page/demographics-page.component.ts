import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import { FirebaseService } from '../firebase.service';
import {Demographics} from '../demographics';

@Component({
  selector: 'app-demographics-page',
  templateUrl: './demographics-page.component.html',
  styleUrls: ['./demographics-page.component.css']
})
export class DemographicsPageComponent implements OnInit {
	public demographics:Demographics = new Demographics();
	

  constructor(private router:Router, private userService:UserService, private firebaseService:FirebaseService) {
  }

  ngOnInit() {
  }

  saveData() {
    this.demographics.person = this.userService.person;
  	this.firebaseService.addDemographics(this.demographics, this.userService.uid);
  }

  submit(demographicsForm:NgForm) {
  	this.saveData();
  	this.router.navigate(['thanks']);
  }

}
