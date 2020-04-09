import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user = {
    email: '',
    name: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.userService.Register(this.user)
  }
}
