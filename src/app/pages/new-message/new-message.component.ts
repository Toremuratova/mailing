import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/api/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor(private messageService: MessageService, private router: Router) { }

  public message = {
    title: '',
    text: '',
    receiver: '',
    author: ''
  }

  ngOnInit(): void {
  }

  onSend(): void {
    this.message.author = localStorage.getItem('name')
    this.messageService.sendMessage(this.message).subscribe()
    this.router.navigate(['/outcoming'])
  }
  onDraft() {
    this.message.author = localStorage.getItem('name')
    this.messageService.saveDraft(this.message).subscribe()
  }
}
