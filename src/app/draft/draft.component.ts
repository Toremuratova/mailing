import { Component, OnInit } from '@angular/core';
import { MessageService } from '../api/message.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  constructor(private ms: MessageService) { }
  public list = []
  ngOnInit(): void {
    let user = localStorage.getItem('name')
    this.ms.getDrafts().subscribe(data => {
      this.list = data.filter(o => o.author.name == user)
    })
  }

}
