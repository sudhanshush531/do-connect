import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adminquestion } from '../models/adminquestion/adminquestion.module';
import { Userquestion } from '../models/userquestion/userquestion.module';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  chat(chatString: string) {
    console.log(chatString);
    return this.httpClient.post(`http://localhost:8085/chat/getdata`, chatString, { responseType: 'text' });
  }
  viewAdminData(): Observable<Array<Adminquestion>> {
    return this.httpClient.get<Array<Adminquestion>>('http://localhost:8087/Q&A/adminQ&A')
  }

  viewUserData(): Observable<Array<Userquestion>> {
    return this.httpClient.get<Array<Userquestion>>('http://localhost:8087/Q&A/userQ&A')
  }

  addToUserTable(newobj: Userquestion): Observable<Userquestion> {
    console.log(newobj);
    return this.httpClient.post<Userquestion>('http://localhost:8087/Q&A/addUserQ&A', newobj)
  }

  addToAdminTable(newobj: Adminquestion): Observable<Adminquestion> {
    console.log(newobj);
    return this.httpClient.post<Adminquestion>('http://localhost:8087/Q&A/addAdminQ&A', newobj)
  }
  //delete user by Id
  deleteQues(id: number): Observable<String> {
    return this.httpClient.delete<String>(`http://localhost:8087/Q&A/deleteQuesById/` + id)
  }
  //email
  emailReq(): Observable<Array<Userquestion>> {
    return this.httpClient.get<Array<Userquestion>>('http://localhost:8082/email/map')
  }
  emailAns(): Observable<Array<Userquestion>> {
    return this.httpClient.get<Array<Userquestion>>('http://localhost:8082/email/mapans')
  }
  //getall user Q&A
  getAllQA(): Observable<Array<Userquestion>> {
    return this.httpClient.get<Array<Userquestion>>(`http://localhost:8087/Q&A/userQ&A`)
  }
  //getAllUserQAById
  findAllUserQAById(id: number): Observable<Userquestion> {
    return this.httpClient.get<Userquestion>(`http://localhost:8087/Q&A/getUserQ&A/` + id);
  }

}
