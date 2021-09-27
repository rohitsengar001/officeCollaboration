import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/services/login-logout.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice: LoginLogoutService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginservice.logOutUser()
  }
}
