import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
  goToRegistration() {
    this.router.navigate(['registration']);
  }

}
