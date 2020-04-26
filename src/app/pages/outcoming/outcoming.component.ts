import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/api/message.service';

@Component({
  selector: 'app-outcoming',
  templateUrl: './outcoming.component.html',
  styleUrls: ['./outcoming.component.css']
})
export class OutcomingComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  public messages = []

  // private user = {
    // id: 3,
    // name: "Stephen King"
  // }
  ngOnInit(): void {
    let user = localStorage.getItem('name')
    this.messageService.getMessages().subscribe(data => {
      this.messages = data.filter(message => message.author.name == user)
      // console.log(data[0])
    })
  }
}
