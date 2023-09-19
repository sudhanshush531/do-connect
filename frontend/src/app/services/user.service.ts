import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.module';
import { Chat } from '../models/chat.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  username:String;
  constructor(private httpClient : HttpClient) { }
  login(userinfo:User):Observable<Boolean>{
    console.log("from Login Service",userinfo);
     return this.httpClient.post<Boolean>(`http://localhost:8088/user/login`,userinfo);
  }

  getAdmin(admininfo:User):Observable<Boolean>{
    return this.httpClient.post<Boolean>('http://localhost:8089/admin/login',admininfo);
  }

  addToUser(newuser:User):Observable<User>{
    console.log(newuser)
    return this.httpClient.post<User>('http://localhost:8088/user/register',newuser)
  }
  
  addToAdmin(newadmin:User):Observable<User>{
    console.log(newadmin)
    return this.httpClient.post<User>('http://localhost:8089/admin/register',newadmin)
  } 


  getchats():Observable<Chat[]>
  {
    return this.httpClient.get<Chat[]>('http://localhost:8088/getchats')
  }

  putchat(c:Chat):Observable<Chat>
  {
    return this.httpClient.post<Chat>('http://localhost:8088/addchat',c)
  }
}
