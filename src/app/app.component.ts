import { Component, OnInit } from '@angular/core';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public active: boolean = false
  title = 'mailing';
  setting = {
    username: '',
    user: '',
    id: 0
  }
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.setting.username = localStorage.getItem('name')
    
    let user = localStorage.getItem('token')
    if (user) this.active = true
  }
  onLogout() {
    localStorage.clear()
    this.active = false
  }
  onEdit() {
    let username = localStorage.getItem('name')
    this.userService.GetUsers().subscribe(user => {
      let currentUser = user.find(o => o.name == username)
      this.setting.id = currentUser.id
      this.userService.EditUsername(this.setting).subscribe()
    })
  }
}
