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
    this.messageService.getMessages().subscribe(data => {
      this.messages = data
      console.log(data[0])
    })
  }

}
