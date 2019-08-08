import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationValues = {
    email : 'newtest@test.com',
    password : '12345678'
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
   // this.doRegistration();
  }

  doRegistration() {
    this.authService.doRegister(this.registrationValues);
  }

}
