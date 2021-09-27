import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidenavbarToggleClass="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  constructor() { }

  ngOnInit(): void {
  }
  onClickSidebarToggle(){
    if(this.sidenavbarToggleClass=="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      this.sidenavbarToggleClass="navbar-nav bg-gradient-primary sidebar toggled sidebar-dark accordion"
      else
      this.sidenavbarToggleClass="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"

  }

}
