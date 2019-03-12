import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navigationInProgress = false;
  constructor(private router: Router) {}

  goToLocation() {
    this.navigationInProgress = !this.navigationInProgress;
    this.router.navigate(['location']);
  }

  goToAuthentication() {
    this.navigationInProgress = !this.navigationInProgress;
    this.router.navigate(['login']);
  }
}
