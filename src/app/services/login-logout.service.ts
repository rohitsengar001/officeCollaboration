import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {
  constructor(private router: Router) { }
  checkUser(form): boolean {
    if (form.get('email').value == 'rohitsengar001@gmail.com' && form.get('password').value == 'rohit@321') {
      localStorage.setItem("username", "rohitsengar001@gmail.com")
      return true
    }
    else
      return false
  }
  logOutUser() {
    localStorage.clear()
    this.router.navigate(['account'])
  }
}
