import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginValue = {
    email: 'newtest@test.com',
    password: '12345678'
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.doLogin();
  }
  doLogin() {
    this.authService.doLogin(this.loginValue);
  }
}
