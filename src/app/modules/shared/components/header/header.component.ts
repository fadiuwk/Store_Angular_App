import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private route: Router,
  ) { }

  logout(){
    localStorage.removeItem("role");
    this.route.navigate(['login'])


  }
}