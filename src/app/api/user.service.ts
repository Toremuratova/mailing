import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = '/api/user/'
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'applcation/json' })
  }

  Login(user): Observable<User> {
    let apiUrl = this.url + 'login'
    return this.http.post<User>(apiUrl, user, this.httpHeaders)
  }

  Register(user): Observable<User> {
    let apiUrl = this.url + 'register'
    return this.http.post<User>(apiUrl, user, this.httpHeaders)
  }

  GetUserInfo(id): Observable<User> {
    let apiUrl = 'assets/users.json/' + id
    return this.http.get<User>(apiUrl)
  }

  GetUsers(): Observable<User[]> {
    let apiUrl = 'assets/users.json/'
    return this.http.get<User[]>(apiUrl)
  }

}
