import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chow-down',
  templateUrl: './chow-down.component.html',
  styleUrls: ['./chow-down.component.css']
})
export class ChowDownComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToLocation() {
    this.router.navigate(['location']);
  }

  goToAuthentication() {
    this.router.navigate(['login']);
  }

}
