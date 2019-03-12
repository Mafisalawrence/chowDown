import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat: number;
  lng: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['home']);
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;

     });
   }

}
}
