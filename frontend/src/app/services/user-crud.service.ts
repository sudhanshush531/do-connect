import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(private httpClient: HttpClient) { }
  //get all users
  getAllUser(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(`http://localhost:8088/user/getusers`)
  }
  //delete user by Id
  deleteUserById(id: number): Observable<String> {
    return this.httpClient.delete<String>(`http://localhost:8088/user/deleteUserById/`+ id)
  }
  //addnew user
  addNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:8088/user/adduser`, user)
  }
  //update the user details
  updateUserDetails(user: User): Observable<User> {
    return this.httpClient.put<User>(`http://localhost:8086/user/updateuser`, user);
  }
}
