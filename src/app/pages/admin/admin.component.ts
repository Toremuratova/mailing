import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users = []
  ngOnInit(): void {
    this.userService.GetUsers().subscribe(data => {
      this.users = data
    })
  }

  onDelete(id): void {
    console.log(id)
    this.userService.DeleteUser(id).subscribe()
  }
}
