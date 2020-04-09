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

  private user = {
    id: 1,
    name: "Stephen King"
  }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data.filter(message => message.receiver == this.user.name)
      console.log(data[0])
    })
  }

}
