import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginLogoutService } from 'src/app/services/login-logout.service';

@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.css']
})
export class LoginlogoutComponent implements OnInit {

  loginReactiveForm: FormGroup;
  result: boolean;
  constructor(private loginservice: LoginLogoutService, private router: Router) {}

  ngOnInit(): void {
    this.loginReactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
      ]),
    });
    if (localStorage.getItem('username') != null) {
      this.router.navigate(['../account/layout']);
    }
  }
  onSubmit() {
    console.log(this.loginReactiveForm);
    this.result = this.loginservice.checkUser(this.loginReactiveForm);
    if (this.result == true) {
      this.router.navigate(['../account/layout']);
    } else alert('user name and password are incorrect!!');
  }

}
