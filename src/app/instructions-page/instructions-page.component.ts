import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.css']
})
export class InstructionsPageComponent implements OnInit {
	understandCheck:boolean;
	understandValid:string;

  constructor(private router:Router, public userService:UserService) { }

  ngOnInit() {
  }

  submit(instructionsForm:NgForm) {
  	if(this.understandCheck) {
  		this.router.navigate(['survey']);
  	} else {
  		this.understandValid = 'is-invalid';
  	}
  }

}
