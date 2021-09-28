import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/services/login-logout.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin: any
  constructor(private loginservice: LoginLogoutService) {

  }

  ngOnInit(): void {
    this.setAdmin();
  }
  
  ngDoCheck(): void {
    this.setAdmin()
  }
  logout() {
    this.loginservice.logOutUser()
  }

  setAdmin() {
    this.admin = this.loginservice.currentUser
    console.log(this.admin.name);
  }
  
}
