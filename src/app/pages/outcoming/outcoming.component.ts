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

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data
      console.log(data[0])
    })
  }
}
