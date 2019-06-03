import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.css']
})
export class InstructionsPageComponent implements OnInit {
	understandCheck:boolean;
	understandValid:string;
  mturk:boolean = true;
  person:string;
  personValid:string;

  constructor(private router:Router, public userService:UserService) { }

  ngOnInit() {
    this.mturk = environment.mturk;
  }

  submit(instructionsForm:NgForm) {
  	if(this.understandCheck && this.person) {
      this.userService.person = this.person;
  		this.router.navigate(['survey']);
  	} else {
      if(!this.understandCheck) {
        this.understandValid = 'is-invalid';
      } else {
        this.understandValid = 'is-valid';
      }
      if(!this.person) {
        this.personValid = 'is-invalid';
      } else {
        this.personValid = 'valid';
      }
  	}
  }

}
