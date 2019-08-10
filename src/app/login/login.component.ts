import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user;
public password;
public invalid = false;

public mockService = {
	username : "mohamed@gmail.com",
	password : "1234"
}
  constructor(
  	private router: Router,
  	private activatedRoute: ActivatedRoute) { 

  	this.user;
  	this.password;
	
}
  ngOnInit() {
  }

  public login(){
  	console.log(this.user)
  	console.log(this.password)
  	if(this.user === this.mockService.username && this.password === this.mockService.password)
  		{
  			this.invalid = false;
  			this.router.navigate(['../profile'], { relativeTo: this.activatedRoute });
  		}
  	else this.invalid = true;

  }

}
