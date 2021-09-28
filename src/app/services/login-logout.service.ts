import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'

})
export class LoginLogoutService {
  admin;
  currentUser:any;//adminuser
  constructor(private router: Router, private http: HttpClient) {
      this.getadminProfile(localStorage.getItem('username')).subscribe(info=>{
        
        this.currentUser=info[0];
        // console.log(this.currentUser);
    });
  }
  //form:email
  getadmin(form) {
    return this.http.get(`${environment.baseUrl}/admin?username_like=${form.get('email').value}`)
  }

  getadminProfile(username){
    return this.http.get(`${environment.baseUrl}/admin?username_like=${username}`)
  }

  //@param form{email,username,password}
  checkUser(form, selectrole): boolean {
    this.getadmin(form).subscribe(m => {
      this.admin = m[0]

    });
    console.log(this.admin);

    //waiting is required
    if (form.get('email').value == this.admin.username && form.get('password').value == this.admin.password && selectrole == 'Admin') {
      localStorage.setItem("username", this.admin.username);
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
