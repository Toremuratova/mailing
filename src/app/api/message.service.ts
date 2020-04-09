import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/Message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private url = 'assets/message.json'
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url)
  }

  sendMessage(message): Observable<Message> {
    return this.http.post<Message>(this.url, message, this.httpHeaders)
  }
}
