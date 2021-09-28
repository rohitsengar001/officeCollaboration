import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/services/login-logout.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  adminData;
  passwordstatus :boolean= false;
  constructor(private loginservice: LoginLogoutService) { }
  colorClasses = ["list-group-item list-group-item-primary", "list-group-item list-group-item-secondary", "list-group-item list-group-item-success"]
  ngOnInit(): void {
    this.loginservice.getadminProfile(localStorage.getItem('username')).subscribe((user) => {
      this.adminData = user;
      console.log(this.adminData);
    })
  }
  changestatus() {
    if (this.passwordstatus == false){
      this.passwordstatus = true;
    }
    else{
      this.passwordstatus = false;
    }
  }

}
