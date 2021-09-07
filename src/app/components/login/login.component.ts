import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message = '';

  constructor(private as: AuthService) {}

  ngOnInit(): void {}

  onLoginSubmit(data: any) {
    this.as.login(data).subscribe((response) => {
      this.message = 'Login Successful';
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    });
  }
}
