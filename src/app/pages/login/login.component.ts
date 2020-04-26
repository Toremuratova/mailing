import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public user = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    localStorage.setItem('name', this.user.username)
    this.userService.Login(this.user).subscribe(res => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['/incoming'])
    })
  }
}
