import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.userService.Login(this.user)
  }
}
