import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8000/api/user/'
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  Login(user): Observable<User> {
    let apiUrl = this.url + 'login/'
    this.http.post<any>(this.url + 'signin/', user, this.httpHeaders).subscribe()
    return this.http.post<User>(apiUrl, user, this.httpHeaders)
  }

  Register(user): Observable<User> {
    let apiUrl = this.url + 'register/'
    return this.http.post<User>(apiUrl, user, this.httpHeaders)
  }

  GetUserInfo(id): Observable<User> {
    let apiUrl = 'assets/users.json/' + id
    return this.http.get<User>(apiUrl)
  }

  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  DeleteUser(id): Observable<User> {
    let apiUrl = this.url + id //set url
    return this.http.delete<User>(apiUrl)
  }

  EditUsername(user): Observable<User> {
    return this.http.put<User>(this.url + user.id + '/', user, this.httpHeaders)
  }

}
