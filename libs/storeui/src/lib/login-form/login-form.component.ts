import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '@fake-store/data-access';
import { loginClass } from '@fake-store/utlity';

@Component({
  selector: 'fake-store-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit{
  errors: boolean = false;
  username: string = "";
  password: string = "";
  credentials: any = {
    username: null,
    password: null
  }
  constructor(
    private rest: RestService,
    private router: Router,
 
  ){}
  ngOnInit(): void {

  }
  public validateLogin(){
    this.rest.loginApp("auth/login",this.credentials)
    .subscribe((data) =>{
      console.log(data);
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      })

    })
  }
  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  }) 
  submit() {
    console.log('user name is ' + this.username);
    this.credentials.username = this.username;
    this.credentials.password = this.password;
    this.validateLogin();
    console.log((this.loginForm.status=='INVALID'))
    this.errors = (this.loginForm.status=='INVALID');
  }
}
