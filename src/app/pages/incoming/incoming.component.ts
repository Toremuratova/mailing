import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/api/message.service';

@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.css']
})
export class IncomingComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  public messages = []

  ngOnInit(): void {
    let user = localStorage.getItem('name')
    this.messageService.getMessages().subscribe(data => {
      this.messages = data.filter(message => message.receiver.name == user)
    })
  }

}
