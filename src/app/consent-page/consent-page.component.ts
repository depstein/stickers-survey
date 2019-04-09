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
	domain:string;
	domains:string[] = ['Physical Activity', 'Location', 'Music', 'Food'];
	role:string;
	roles:string[] = ['Sharer', 'Recipient'];
  domain_valid:boolean;
  role_valid:boolean;

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(selectForm:NgForm) {
  	if(selectForm.valid) {
  		this.userService.domain = this.domain;
  		this.userService.role = this.role;
  		this.router.navigate(['survey']);
  	}
  	else {
      this.domain_valid = this.domain ? true : false;
      this.role_valid = this.role ? true : false;
  		console.error('Form invalid');
  	}
  }

}
