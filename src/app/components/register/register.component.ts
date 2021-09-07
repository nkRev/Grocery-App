import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  message = '';
  userModel = new User('', '', '', '');
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onFormSubmit(data: any) {
    this.authService.register(this.userModel).subscribe((response) => {
      this.message = response.message;
    });
  }
}
