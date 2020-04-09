import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/api/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  public message = {
    title: '',
    text: ''
  }

  ngOnInit(): void {
  }

  onSend(): void {
    console.log(this.message)
    this.messageService.sendMessage(this.message)
  }
}
